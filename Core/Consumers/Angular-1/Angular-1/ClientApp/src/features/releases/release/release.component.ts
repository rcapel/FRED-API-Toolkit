import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IReleaseResponse, IRelease } from '../../../fredapi/releases/release.interfaces';

@Component({
  selector: 'release',
  templateUrl: './release.component.html'
})
export class ReleaseComponent implements OnInit {

  heading: string = "Release";

  // request arguments
  releaseId: number;

  // response
  response: IReleaseResponse;
  //sources: IRelease[];//sources is an ISource with a press_release flag
  //fetchMessage: string;
  //url: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.releaseId = +data.get("id");
    });
    this.route.data.subscribe(data => {
        this.parseData(data['release']);
      }
    );
  }

  parseData(data) {
    console.log(data);
    this.response = data.container;
    //this.sources = this.container.releases;
    //this.fetchMessage = data.fetchMessage;
    //this.url = data.url;
  }

  onSubmit() {
    this.router.navigate(["/release/" + this.releaseId]);
  }

}
