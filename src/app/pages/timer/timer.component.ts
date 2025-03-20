import { Component, OnDestroy } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnDestroy {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  private intervalId: any;
  isRunning = false;

  startTimer() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.intervalId = setInterval(() => {
      this.milliseconds += 1;
      if (this.milliseconds === 100) {
        this.milliseconds = 0;
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
        }
      }
    }, 10);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.isRunning = false;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
