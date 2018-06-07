import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {QuotesPage} from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollections: { category: string, quotes: Quote[], icon: string }[];
  quotesPage;

  ngOnInit() {
    this.quoteCollections = quotes;
    this.quotesPage = QuotesPage; // We have to do the assignment here instead, as HTML is unable to get the assigned value if kept outside
  }
}
