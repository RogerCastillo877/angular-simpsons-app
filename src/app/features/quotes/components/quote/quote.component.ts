import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiQuoteService } from '../../services/api-quote/api-quote.service';
import { EMPTY, fromEvent, Observable, Subject, switchMap } from 'rxjs';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, AfterViewInit {

  // @ViewChild("newQuoteButton") button!: ElementRef;

  // quote$: Observable<Quote> = EMPTY;

  requestNewQuote$: Subject<void> = new Subject();

  quote$: Observable<Quote> = this.requestNewQuote$.pipe(
    switchMap(_ => this.apiQuoteService.getRandom())
  )

  constructor(private apiQuoteService: ApiQuoteService) { }

  ngOnInit(): void {
    this.getNewQuote();
  }

  ngAfterViewInit(): void {
    //   this.quote$ = fromEvent(this.button.nativeElement, "click").pipe(
    //     switchMap(_ => this.apiQuoteService.getRandom())
    //   )
  }

  getNewQuote(): void {
    // this.apiQuoteService.getRandom().subscribe(response =>
    //   console.log(response)
    // )


    this.requestNewQuote$.next()
  }
}
