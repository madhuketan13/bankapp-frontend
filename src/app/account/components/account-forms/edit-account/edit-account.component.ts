import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrl: './edit-account.component.css'
})
export class EditAccountComponent implements OnInit{

  accountDetails: any = {};
  accountTypes: string[] = [];

  constructor(private router: Router , private accountService: AccountService) {}

  ngOnInit(): void {
    const storedDetails = localStorage.getItem('profileDetails');
    if (storedDetails) {
      this.accountDetails = JSON.parse(storedDetails);
      this.populateAccountTypes();
    }
  }

  populateAccountTypes(): void {
    if (this.accountDetails.accountType) {
      this.accountTypes = [this.accountDetails.accountType];
    }
  }

  updateAccount() {
    console.log('Updating account:', this.accountDetails);
  
    this.accountService.updateAccount(this.accountDetails).subscribe(
      (res) => {
        console.log('Account updated successfully:', res);
        localStorage.setItem('accountDetails', JSON.stringify(this.accountDetails));
        this.router.navigate(['/dashboard']);
        alert('Account updated successfully!');
      },
      (error) => {
        console.error('Error updating account:', error);
        alert('Failed to update account.');
      }
    );
  }
  

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
