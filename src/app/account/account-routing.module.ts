import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/account-forms/create-account/create-account.component';
import { WithdrawComponent } from './components/account-forms/withdraw/withdraw.component';
import { DepositComponent } from './components/account-forms/deposit/deposit.component';
import { EditAccountComponent } from './components/account-forms/edit-account/edit-account.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'edit-account', component: EditAccountComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'deposit', component: DepositComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
