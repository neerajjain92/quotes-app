import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favouriteQuotes: Quote[] = [];

  addQuoteToFavourites(quote: Quote) {
    this.favouriteQuotes.push(quote);
    console.log(this.favouriteQuotes);
  }

  removeQuoteFromFavourite(quote: Quote) {
    let quoteId = quote.id;
    this.favouriteQuotes = this.favouriteQuotes.filter((quote) => {
      return quote.id != quoteId;
    })
  }

  getFavouriteQuotes() {
    return this.favouriteQuotes.slice();
  }

  isQuoteFavourite(quote: Quote) {
    return this.favouriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
  }
}
