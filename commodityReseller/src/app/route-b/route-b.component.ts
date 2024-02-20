import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.css']
})
export class RouteBComponent implements OnInit {
  result: any = {};
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
   // Retrieve the result from the route parameters
   this.route.queryParams.subscribe(params => {
    this.result = {
      maxProfit: +params['maxProfit'],
      buyPrice: +params['buyPrice'],
      buyIndex: +params['buyIndex'],
      sellPrice: +params['sellPrice'],
      sellIndex: +params['sellIndex']
    };
  });
}
  }

