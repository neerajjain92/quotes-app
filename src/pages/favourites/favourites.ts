import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: Quote[] = [];

  constructor(private quoteService: QuotesService, private modalController: ModalController
    , private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavouriteQuotes();
  }

  onViewQuote(quote: Quote) {
    let modal = this.modalController.create(QuotePage, quote);
    modal.present();

    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavourite(quote);
      }
    });
  }

  onRemoveFromFavourite(quote: Quote) {
    this.quoteService.removeQuoteFromFavourite(quote);

    // Let's refresh the entire list but this is not the correct option to do if the quotes array is too big.
    // this.quotes = this.quoteService.getFavouriteQuotes();
    const foundQuoteIndex = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
    this.quotes.splice(foundQuoteIndex, 1);
  }

  getBackgroundColor() {
    return this.settingsService.getSettings() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.getSettings();
  }
}
