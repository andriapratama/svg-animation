import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'svg-animation';

  constructor(public appSvc: AppService) {}
}
