import {computed, Injectable, signal} from '@angular/core';
import {Project, Projects} from './core/interfaces/project.interface';

const PROJECTS = 'projects';
const PROJECTS_FALLBACK = '{Projects: []}';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly _projects = signal<Project[]>([]);

  readonly computedProjects = computed(() => this._projects());

  constructor() {
    const projectsFromStorage = JSON.parse(localStorage.getItem(PROJECTS) || PROJECTS_FALLBACK);
    this._projects.set(projectsFromStorage.Projects);
  }

  setProjectsToLocalStorage(projects: Projects): void {
    localStorage.setItem(PROJECTS, JSON.stringify(projects));
    this._projects.set(projects.Projects);
  }
}
