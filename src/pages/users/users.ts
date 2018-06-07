import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  private users = [];
  private page = 0;
  public maximumPages = 4;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    this.loadUsersInfinitely();
    this.loadUsersVirtually();
  }

  loadUsersVirtually() {
    this.httpClient.get('https://randomuser.me/api/?results=400')
      .subscribe(res => {
        this.users = res['results'];
      });
  }

  loadUsersInfinitely(infiniteScroll?) {
    this.httpClient.get('https://randomuser.me/api/?results=20&page=${this.page}')
      .subscribe(res => {
        this.users = this.users.concat(res['results']);
      });

    if (infiniteScroll) {
      infiniteScroll.complete();
    }
  }

  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsersInfinitely(infiniteScroll);

    if (this.page === this.maximumPages) {
      infiniteScroll.enable(false);
    }
  }

}
