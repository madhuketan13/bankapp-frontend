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

  approveLoan(loanId: number): void {
    // this.adminService.approveLoan(loanId).subscribe(
    //   () => {
    //     alert('Loan approved successfully');
    //     this.getAllLoans(); // Refresh the list
    //   },
    //   (error) => {
    //     console.error('Error approving loan:', error);
    //   }
    // );
  }

  rejectLoan(loanId: number): void {
    // this.adminService.rejectLoan(loanId).subscribe(
    //   () => {
    //     alert('Loan rejected successfully');
    //     this.getAllLoans(); // Refresh the list
    //   },
    //   (error) => {
    //     console.error('Error rejecting loan:', error);
    //   }
    // );
  }

}
