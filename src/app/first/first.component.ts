import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent {
  constructor(
    private route: ActivatedRoute,
  ) {
    
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("component has been initialized!")
    });
  }

  sideMenu: boolean = true
}
