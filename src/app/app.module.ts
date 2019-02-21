import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule
  } from '@angular/material';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EllaComponent } from './pages/ella/ella.component';
import { JamesComponent } from './pages/james/james.component';
import { LittersComponent } from './pages/litters/litters.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// Components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DogCoverComponent } from './components/dog-cover/dog-cover.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

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
    ImpressumComponent,
    DogCoverComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
