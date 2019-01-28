import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public distance: number;
  public time: number;

  public pace: string;
  public speed: string;

  public unit: string;

  public language: string;

  public numberToTimeLike(num: string): string {
    if (parseFloat(num) < 10) {
      return `0${num}`;
    } else if (parseFloat(num) >= 10) {
      return num;
    }
  }

  public calculate(): void {
    if (this.distance.toString().includes(',') === true) {
      this.distance = parseFloat(parseFloat(this.distance.toString().replace(',', '.')).toPrecision(5));
    }
    if (this.time.toString().includes(',') === true) {
      this.time = parseFloat(parseFloat(this.time.toString().replace(',', '.')).toPrecision(5));
    }
    if (this.unit === 'Hours' && this.distance !== undefined && this.time !== undefined) {
      if ((this.time * 60 / this.distance).toString().includes('.') === true) {
        const paceConstant: string = (this.time * 60 / this.distance).toString();
        const speedConstant: string = (this.distance / this.time).toFixed(2).toString();
        // tslint:disable-next-line:radix
        const minutesConstant: string = paceConstant.substring(0, paceConstant.indexOf('.'));
        // tslint:disable-next-line:max-line-length
        const secondsConstant: string = this.numberToTimeLike((parseFloat(paceConstant.substring(paceConstant.indexOf('.'))) * 60).toFixed(0).toString());
        this.pace = `${minutesConstant}:${secondsConstant}`;
        this.speed = `${speedConstant}`;
      } else {
        const paceConstant: string = (this.time * 60 / this.distance).toString();
        const speedConstant: string = (this.distance / this.time).toString();
        this.pace = `${paceConstant}:00`;
        this.speed = `${speedConstant}`;
      }
    }
    if (this.unit === 'Minutes' && this.distance !== undefined && this.time !== undefined) {
      if ((this.time / this.distance).toString().includes('.') === true) {
        const paceConstant: string = (this.time / this.distance).toString();
        const speedConstant: string = (this.distance / (this.time / 60)).toFixed(2).toString();
        // tslint:disable-next-line:radix
        const minutesConstant: string = paceConstant.substring(0, paceConstant.indexOf('.'));
        // tslint:disable-next-line:max-line-length
        const secondsConstant: string = this.numberToTimeLike((parseFloat(paceConstant.substring(paceConstant.indexOf('.'))) * 60).toFixed(0).toString());
        this.pace = `${minutesConstant}:${secondsConstant}`;
        this.speed = `${speedConstant}`;
      } else {
        const paceConstant: string = (this.time / this.distance).toString();
        const speedConstant: string = (this.distance / (this.time / 60)).toString();
        this.pace = `${paceConstant}:00`;
        this.speed = `${speedConstant}`;
      }
    }
  }

  public convert(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.calculate();
    }
  }

  public ngOnInit() {
    this.language = navigator.language;
  }
}
