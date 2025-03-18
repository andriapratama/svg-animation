import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('button') buttonElement!: ElementRef<HTMLButtonElement>;
  isButtonActive: boolean = false;
  constructor(
    private router: Router,
    public appSvc: AppService,
    private renderer: Renderer2
  ) {}

  toMap() {
    this.appSvc.onUseLoading();
    setTimeout(() => {
      this.router.navigateByUrl('/map').then();
    }, 800);
  }

  onMouseEnter() {
    this.isButtonActive = true;
    this.renderer.addClass(
      this.buttonElement.nativeElement,
      '-translate-y-[12px]'
    );
    this.renderer.removeClass(
      this.buttonElement.nativeElement,
      'animate-fade-up'
    );
    setTimeout(() => {
      this.renderer.removeClass(this.buttonElement.nativeElement, 'paused');
      this.renderer.addClass(
        this.buttonElement.nativeElement,
        'animate-fade-down'
      );
    }, 50);
  }
  onMouseLeave() {
    this.isButtonActive = false;
    this.renderer.removeClass(
      this.buttonElement.nativeElement,
      '-translate-y-[12px]'
    );
    this.renderer.removeClass(
      this.buttonElement.nativeElement,
      'animate-fade-down'
    );
    setTimeout(() => {
      this.renderer.addClass(
        this.buttonElement.nativeElement,
        'animate-fade-up'
      );
    }, 50);
  }
}
