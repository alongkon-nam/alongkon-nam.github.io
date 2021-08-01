import { Component,OnInit } from '@angular/core';
import { WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  video1:any;
  video2:any;
  video3:any;

  constructor(){} 

  async ngOnInit() {
    this.video1 = true;
    this.video2 = false;
    this.video3 = false;
    await this.pause(5000);
    this.video1 = false;
    this.video2 = true;
    this.video3 = false;
  }

  pause(msec : any) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(resolve, msec || 500);
        }
    );
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }
}
