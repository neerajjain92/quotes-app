import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alterController: AlertController, private quotesService: QuotesService) {
  }

  ngOnInit() {
    console.log(this.navParams.data);
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   console.log(this.navParams.data);
  //   this.quoteGroup = this.navParams.data;
  // } Add Elvis operator (?.) in this template to use this approach

  onMarkFavourite(selectedQuote: Quote) {
    let confirm = this.alterController.create({
      title: 'Mark Favourite',
      message: 'Are you sure you want to mark the quote as favourite ?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavourites(selectedQuote);
          }
        },
        {
          text: 'No, I change my mind',
          role: 'cancel',
          handler: () => {
            console.log('Disagree Clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  isFavouriteQuote(selectedQuote: Quote) {
    return this.quotesService.isQuoteFavourite(selectedQuote);
  }

  onMarkUnfavourite(selectedQuote: Quote) {
    this.quotesService.removeQuoteFromFavourite(selectedQuote);
  }

}
