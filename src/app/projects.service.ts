import {computed, Injectable, Signal, signal} from '@angular/core';
import {Project, Projects} from './core/interfaces/project.interface';

const PROJECTS = 'projects';
const PROJECTS_FALLBACK = '{Projects: []}';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly _projects = signal<Project[]>([]);

  readonly computedProjects = computed(() => this._projects());

  computedProject(id: string): Signal<Project | undefined> {
    return computed(() => this._projects().find(project => project.id === id));
  }

  constructor() {
    const projectsFromStorage = JSON.parse(localStorage.getItem(PROJECTS) || PROJECTS_FALLBACK);
    this._projects.set(projectsFromStorage.Projects);
  }

  setProjectsToLocalStorage(projects: Projects): void {
    localStorage.setItem(PROJECTS, JSON.stringify(projects));
    this._projects.set(projects.Projects);
  }

  saveProject(project: Partial<Project>): void {
    const projects = this.computedProjects();

    const index = projects.findIndex(p => p.id === project.id);

    if (index !== -1) {
      projects[index] = {
        ...projects[index],
        ...project,
      };

      this._projects.set([...projects]);
      this.setProjectsToLocalStorage({Projects: this.computedProjects()});
    }
  }
}
