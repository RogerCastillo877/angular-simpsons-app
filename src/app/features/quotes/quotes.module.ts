import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotePagesComponent } from './pages/quote-pages/quote-pages.component';
import { QuotesRoutingModule } from './quotes-routing.module';
import { UiModule } from 'src/app/ui/ui.module';
import { SearchByCharacterComponent } from './components/search-by-character/search-by-character.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';



@NgModule({
  declarations: [
    QuotePagesComponent,
    SearchByCharacterComponent,
    QuoteComponent,
    QuoteCardComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    UiModule,
  ]
})
export class QuotesModule { }
