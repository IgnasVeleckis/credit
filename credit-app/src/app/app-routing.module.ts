import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/layouts/main/main.component';
import { CreditComponent } from './credit/containers/credit/credit.component';
import { LandingComponent } from './landing/containers/landing/landing.component';
import { CreditHistoryComponent } from './credit-history/containers/credit-history/credit-history.component';




const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: "credit",
        component: CreditComponent
      },
      {
        path: "credit-history",
        component: CreditHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
