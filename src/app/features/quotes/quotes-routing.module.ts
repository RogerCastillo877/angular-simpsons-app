import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotePagesComponent } from './pages/quote-pages/quote-pages.component';
const routes: Routes = [
  { path: 'quote', component: QuotePagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
