import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit{

  quote: Quote;
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}

  ngOnInit() {
    this.quote = this.navParams.data;
  }
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
