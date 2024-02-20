import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.css']
})
export class RouteAComponent implements OnInit {
  prices: number[] = [2500, 30, 200, 6, 100, 3];
  result: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  calculateMaxProfit() {
    let maxProfit = 0;
    let buyIndex = 0;
    let sellIndex = 0;

    for (let i = 0; i < this.prices.length - 1; i++) {
      for (let j = i + 1; j < this.prices.length; j++) {
        const profit = this.prices[j] - this.prices[i];
        if (profit > maxProfit) {
          maxProfit = profit;
          buyIndex = i;
          sellIndex = j;
        }
      }
    }

    // Navigate to Route B and pass the result as route parameters
    this.router.navigate(['/routeB'], {
      queryParams: {
        maxProfit,
        buyPrice: this.prices[buyIndex],
        buyIndex,
        sellPrice: this.prices[sellIndex],
        sellIndex
      }
    });
  }
}


