import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('mount') mount!: ElementRef;
  isActive: boolean = false;
  constructor(
    private router: Router,
    public appSvc: AppService,
    private renderer: Renderer2
  ) {}

  onBack() {
    this.appSvc.onUseLoading();
    setTimeout(() => {
      this.router.navigateByUrl('/').then();
    }, 800);
  }

  onMount() {
    // this.renderer.addClass(this.mount.nativeElement, 'animate-litle-bounce');

    this.mount.nativeElement.classList.add(
      'translate-y-[-50vh]',
      'duration-[2s]',
      'ease-linear',
      'transition-all'
    );
    setTimeout(() => {
      this.renderer.removeClass(
        this.mount.nativeElement,
        'animate-litle-bounce'
      );
    }, 2000);
  }
}
