import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "transactions",
        component: TransactionsComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
