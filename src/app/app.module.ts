import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatExpansionModule} from '@angular/material';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EllaComponent } from './pages/ella/ella.component';
import { JamesComponent } from './pages/james/james.component';
import { LittersComponent } from './pages/litters/litters.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
// Components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ella', component: EllaComponent },
  { path: 'james', component: JamesComponent },
  { path: 'litters', component: LittersComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    HomeComponent,
    EllaComponent,
    JamesComponent,
    AboutComponent,
    LittersComponent,
    FotosComponent,
    NotFoundComponent,
    // Components
    HeaderComponent,
    MenuComponent,
    ContactComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
