import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {ProjectDetailsComponent} from '../project-details/project-details.component';
import {ProjectListComponent} from '../project-list/project-list.component';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf, ProjectDetailsComponent, ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly _projectsService = inject(ProjectsService);

  @Input()
  projectId: string | null = null;

  readonly projects = this._projectsService.computedProjects;
}
