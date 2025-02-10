import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account',
  standalone: true,
  imports: [],
  templateUrl: './edit-account.component.html',
  styleUrl: './edit-account.component.css'
})
export class EditAccountComponent implements OnInit{

  accountDetails: any = {};
  accountTypes: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedDetails = localStorage.getItem('accountDetails');
    if (storedDetails) {
      this.accountDetails = JSON.parse(storedDetails);
      this.populateAccountTypes();
    }
  }

  populateAccountTypes(): void {
    if (this.accountDetails.accountType) {
      this.accountTypes = [this.accountDetails.accountType]; // Ensuring only the stored type is shown
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
