import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-loans-row',
  templateUrl: './dashboard-loans-row.component.html',
  styleUrls: ['./dashboard-loans-row.component.css']
})
export class DashboardLoansRowComponent implements OnInit {
  @Input() loan: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
