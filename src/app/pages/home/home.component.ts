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
    this.renderer.addClass(
      this.buttonElement.nativeElement,
      '-translate-y-[12px]'
    );
    this.renderer.removeClass(
      this.buttonElement.nativeElement,
      'animate-fade-up'
    );
    this.renderer.addClass(
      this.buttonElement.nativeElement,
      'animate-fade-down'
    );
  }
  onMouseLeave() {
    this.renderer.removeClass(
      this.buttonElement.nativeElement,
      '-translate-y-[12px]'
    );
    this.renderer.removeClass(
      this.buttonElement.nativeElement,
      'animate-fade-down'
    );
    this.renderer.addClass(this.buttonElement.nativeElement, 'animate-fade-up');
  }
}
