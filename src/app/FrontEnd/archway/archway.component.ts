import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-archway',
  templateUrl: './archway.component.html',
  styleUrls: ['./archway.component.scss']
})
export class ArchwayComponent implements OnInit {

  constructor(private facebookService: FacebookService) { }

  ngOnInit(): void {
    this.initFacebookService();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml:true, version:'v11.0'};
    this.facebookService.init(initParams);
  }

}
