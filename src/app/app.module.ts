import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IaContentComponent} from './ia-content/ia-content.component';
import {B1PageComponent} from './pages/B/b1-page/b1-page.component';
import {AppRoutingModule} from './app-routing-module/app-routing-module.module';
import {HomeComponent} from './pages/home/home.component';
import {A1PageComponent} from './pages/A/a1-page/a1-page.component';
import {B2PageComponent} from './pages/B/b2-page/b2-page.component';
import {B3PageComponent} from './pages/B/b3-page/b3-page.component';
import {B4PageComponent} from './pages/B/b4-page/b4-page.component';
import {B5PageComponent} from './pages/B/b5-page/b5-page.component';
import {B6PageComponent} from './pages/B/b6-page/b6-page.component';
import {B7PageComponent} from './pages/B/b7-page/b7-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IaContentComponent,
    B1PageComponent,
    HomeComponent,
    A1PageComponent,
    B2PageComponent,
    B3PageComponent,
    B4PageComponent,
    B5PageComponent,
    B6PageComponent,
    B7PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
