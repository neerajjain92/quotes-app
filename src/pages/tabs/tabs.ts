import {Component} from "@angular/core";
import {FavouritesPage} from "../favourites/favourites";
import {LibraryPage} from "../library/library";
import {UsersPage} from "../users/users";

@Component({
  selector: 'page-tab',
  template: `
    <ion-tabs [selectedIndex]="2">
      <ion-tab [root]="favouritesPage" tabTitle="Favourites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
      <ion-tab [root]="usersPage" tabTitle="Users" tabIcon="people"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  favouritesPage = FavouritesPage;
  libraryPage = LibraryPage;
  usersPage = UsersPage;
}
