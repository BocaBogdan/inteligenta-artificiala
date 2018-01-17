import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { A1PageComponent } from '../pages/A/a1-page/a1-page.component';
import { A4PageComponent } from '../pages/A/a4-page/a4-page.component';
import { B1PageComponent } from '../pages/B/b1-page/b1-page.component';
import { HomeComponent } from '../pages/home/home.component';
import { B2PageComponent } from '../pages/B/b2-page/b2-page.component';
import { B3PageComponent } from '../pages/B/b3-page/b3-page.component';
import { B4PageComponent } from '../pages/B/b4-page/b4-page.component';
import { B5PageComponent } from '../pages/B/b5-page/b5-page.component';
import { B6PageComponent } from '../pages/B/b6-page/b6-page.component';
import { B7PageComponent } from '../pages/B/b7-page/b7-page.component';
import { A5PageComponent } from '../pages/A/a5-page/a5-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'a1', component: A1PageComponent },
  { path: 'a4', component: A4PageComponent },
  { path: 'b1', component: B1PageComponent },
  { path: 'b2', component: B2PageComponent },
  { path: 'b3', component: B3PageComponent },
  { path: 'b4', component: B4PageComponent },
  { path: 'b5', component: B5PageComponent },
  { path: 'b6', component: B6PageComponent },
  { path: 'b7', component: B7PageComponent },
  { path: 'a5', component: A5PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


