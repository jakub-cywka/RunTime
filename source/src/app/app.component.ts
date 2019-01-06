import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  distance: string;
  time: string;
  speed: number;
  pace: number;
  distanceUnit: string;
  timeUnit: string;
  public submit(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.time !== '' && this.distance !== '') {
      if (this.distanceUnit === 'kilometers') {
        if (this.timeUnit === 'hours') {
          // tslint:disable-next-line:radix
          this.pace = parseInt(this.time) * 60 / parseInt(this.distance);
          // tslint:disable-next-line:radix
          this.speed = parseInt(this.distance) / parseInt(this.time);
        }
        if (this.timeUnit === 'minutes') {
          // tslint:disable-next-line:radix
          this.pace = parseInt(this.time) / parseInt(this.distance);
          // tslint:disable-next-line:radix
          this.speed = parseInt(this.distance) / parseInt(this.time) / 60;
        }
      }
    }
    console.log(
      `distance: ${this.distance},
      time: ${this.time},
      speed: ${this.speed},
      pace: ${this.pace},
      distanceUnit: ${this.distanceUnit},
      timeUnit: ${this.timeUnit}
      `
    );
  }
}
