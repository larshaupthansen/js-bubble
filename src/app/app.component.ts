import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  alpha = 0;
  beta =0;
  gamma = 0;

  public constructor() {


//     if ((<any>window).DeviceOrientationEvent) {
//       window.addEventListener('deviceorientation', this.deviceOrientationHandler, false);
//     }
  }

  deviceOrientationHandler(e: any): boolean {

    this.alpha = e.alpha;
    this.beta = e.beta;
    this.gamma = e.gamma;
   
    var bubble = document.getElementById("bubble");

    var left = -50 + this.gamma;
    var top = -50 + this.beta;
    bubble.style.marginLeft = left.toString()+"px";
    bubble.style.marginTop = top.toString()+"px";

    return true;
  }
}
