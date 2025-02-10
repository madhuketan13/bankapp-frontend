import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { WithdrawComponent } from './components/account-forms/withdraw/withdraw.component';
import { DepositComponent } from './components/account-forms/deposit/deposit.component';
import { CreateAccountComponent } from './components/account-forms/create-account/create-account.component';
import { httpInterceptors } from '../shared/interceptors';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WithdrawComponent,
    DepositComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AccountRoutingModule
  ],
  providers: [httpInterceptors,AccountService]
  
})
export class AccountModule { }
