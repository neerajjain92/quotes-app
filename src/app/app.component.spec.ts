import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {MyApp} from "./app.component";
import {IonicModule, Platform} from "ionic-angular";
import {PlatformMock, SplashScreenMock, StatusBarMock} from "../../config/mocks-ionic";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from '@ionic-native/status-bar';


describe('MyApp', () => {
  let fixture: ComponentFixture<MyApp>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyApp
      ],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: Platform, useClass: PlatformMock}
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(MyApp);
    debugElement = fixture.debugElement;
  }));

  it('should increment/decrement value', () => {
    console.log(fixture.componentInstance.hello);
    console.log("Heysdfds");
  });
});
