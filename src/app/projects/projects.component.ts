import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NgIf} from '@angular/common';
import {ProjectDetailsComponent} from '../project-details/project-details.component';
import {ProjectListComponent} from '../project-list/project-list.component';
import {ProjectsService} from '../projects.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf, ProjectDetailsComponent, ProjectListComponent, RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent{
  private readonly _projectsService = inject(ProjectsService);
  readonly projects = this._projectsService.computedProjects;
}
