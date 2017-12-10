import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {B1PageComponent} from "../pages/b1-page/b1-page.component";
import {HomeComponent} from "../pages/home/home.component";
import {B2PageComponent} from "../pages/b2-page/b2-page.component";
import {B3PageComponent} from "../pages/b3-page/b3-page.component";
import {B4PageComponent} from "../pages/b4-page/b4-page.component";
import {B5PageComponent} from "../pages/b5-page/b5-page.component";
import {B6PageComponent} from "../pages/b6-page/b6-page.component";
import {B7PageComponent} from "../pages/b7-page/b7-page.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'b1', component: B1PageComponent},
  {path: 'b2', component: B2PageComponent},
  {path: 'b3', component: B3PageComponent},
  {path: 'b4', component: B4PageComponent},
  {path: 'b5', component: B5PageComponent},
  {path: 'b6', component: B6PageComponent},
  {path: 'b7', component: B7PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


