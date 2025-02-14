import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {

  loans: any;

  constructor(private adminService: AdminService){}

  ngOnInit(): void {
    this.getAllLoans();
  }

  getAllLoans(): void {
    this.adminService.getAllLoans().subscribe(
      (data) => {
        this.loans = data;
      },
      (error) => {
        console.error('Error fetching loans:', error);
      }
    );
  }

  updateLoanStatus(loanId: string, status: string): void {
    this.adminService.updateLoanStatus(loanId, status).subscribe(
      (res) => {
        console.log(res);
        this.getAllLoans();
      },
      (error) => {
        console.error(`Error updating loan status to ${status}:`, error);
      }
    );
  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }

}
