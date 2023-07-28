import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  private readonly _router = inject(Router);
  private readonly _projectsService = inject(ProjectsService);

  jsonValue = '';

  save(): void {
    if (!this.jsonValue) {
      return;
    }

    try {
      const data = JSON.parse(this.jsonValue);

      this._projectsService.setProjectsToLocalStorage(data);
      this._router.navigateByUrl('/projects');
    } catch (error) {
      console.error('Введите валидный JSON');
    }
  }
}
