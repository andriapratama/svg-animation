import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router, public appSvc: AppService) {}

  toMap() {
    this.appSvc.onUseLoading();
    setTimeout(() => {
      this.router.navigateByUrl('/map').then();
    }, 800);
  }
}
