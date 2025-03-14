import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  isActive: boolean = false;
  constructor(private router: Router, public appSvc: AppService) {}

  onBack() {
    this.appSvc.onUseLoading();
    setTimeout(() => {
      this.router.navigateByUrl('/').then();
    }, 800);
  }

  onActive() {
    this.isActive = !this.isActive;
  }
}
