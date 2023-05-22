import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotePagesComponent } from './pages/quote-pages/quote-pages.component';
import { QuotesRoutingModule } from './quotes-routing.module';
import { UiModule } from 'src/app/ui/ui.module';
import { SearchByCharacterComponent } from './components/search-by-character/search-by-character.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiQuoteService } from './services/api-quote/api-quote.service';



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
    HttpClientModule,
  ],
  providers: [
    QuoteComponent,
  ]
})
export class QuotesModule { }
