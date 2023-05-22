import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../../models/Quote';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiQuoteService {

  constructor(private http: HttpClient) { }

  getRandom(): Observable<Quote> {
    return this.http.get<Quote[]>('https://thesimpsonsquoteapi.glitch.me/quotes')
      .pipe(map(response => response[0]))
  }
}
