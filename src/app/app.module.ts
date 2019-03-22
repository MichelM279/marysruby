import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule
  } from '@angular/material';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { EllaComponent } from './pages/ella/ella.component';
import { JamesComponent } from './pages/james/james.component';
import { AComponent } from './pages/litters/a/a.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// Components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DogCoverComponent } from './components/dog-cover/dog-cover.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PedigreeCardComponent } from './components/pedigree-card/pedigree-card.component';
import { ListItemsCardComponent } from './components/list-items-card/list-items-card.component';
import { PolaroidComponent } from './components/polaroid/polaroid.component';
import { PolaroidCollageComponent } from './components/polaroid-collage/polaroid-collage.component';
import { PostItComponent } from './components/post-it/post-it.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ella', component: EllaComponent },
  { path: 'james', component: JamesComponent },
  { path: 'a', component: AComponent },
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
    AComponent,
    NotFoundComponent,
    // Components
    HeaderComponent,
    MenuComponent,
    ContactComponent,
    ImpressumComponent,
    DogCoverComponent,
    NewsCardComponent,
    ContactFormComponent,
    PedigreeCardComponent,
    ListItemsCardComponent,
    PolaroidComponent,
    PolaroidCollageComponent,
    PostItComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
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
