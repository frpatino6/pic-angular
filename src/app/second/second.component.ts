import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  constructor(
    private route: ActivatedRoute,
  ) {
    
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("component has been initialized!")
    });
  }
}
