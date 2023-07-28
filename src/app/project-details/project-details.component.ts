import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsService} from '../projects.service';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Project} from '../core/interfaces/project.interface';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent {
  private readonly _projectsService = inject(ProjectsService);
  private readonly _fb = inject(FormBuilder);

  @Input()
  set projectId(projectId: string) {
    const project = this._projectsService.computedProject(projectId);

    if (!project()) {
      return;
    }

    this.projectForm.patchValue(project()!);
    this.projectForm.disable();
  }

  readonly projectForm = this._fb.group({
    id: '',
    subject: '',
    startDate: '',
    endDate: '',
    createdBy: '',
    description: '',
  });

  saveProject(): void {
    this._projectsService.saveProject(this.projectForm.getRawValue() as Partial<Project>);
    this.projectForm.disable();
  }
}
