import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;

  homepage: String;
  homepageDe = 'Startseite';
  homepageEn = 'Homepage';
  about: String;
  aboutDe = 'Über Uns';
  aboutEn = 'About Us';
  dogs: String;
  dogsDe = 'Unsere Hunde';
  dogsEn = 'Our Dogs';
  puppies: String;
  puppiesDe = 'Welpen';
  puppiesEn = 'Litters';
  contact: String;
  contactDe = 'Kontakt';
  contactEn = 'Contact Us';

  constructor(private router: Router, private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  closeDrawer() {
    this.drawer.close();
  }

  navHome() {
    this.router.navigateByUrl('/home');
    this.closeDrawer();
  }

  navAbout() {
    this.router.navigateByUrl('/about');
    this.closeDrawer();
  }

  navElla() {
    this.router.navigateByUrl('/ella');
    this.closeDrawer();
  }

  navJames() {
    this.router.navigateByUrl('/james');
    this.closeDrawer();
  }

  navLitters() {
    this.router.navigateByUrl('/litters');
    this.closeDrawer();
  }

  navFotos() {
    this.router.navigateByUrl('/fotos');
    this.closeDrawer();
  }

  navContact() {
    this.router.navigateByUrl('/contact');
    this.closeDrawer();
  }

  navImpressum() {
    this.router.navigateByUrl('/impressum');
    this.closeDrawer();
  }

  langGerman() {
    this.languageService.language = Language.GERMAN;
  }

  langEnglish() {
    this.languageService.language = Language.ENGLISH;
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.homepage = this.homepageEn;
      this.about = this.aboutEn;
      this.dogs = this.dogsEn;
      this.puppies = this.puppiesEn;
      this.contact = this.contactEn;
    } else {
      this.homepage = this.homepageDe;
      this.about = this.aboutDe;
      this.dogs = this.dogsDe;
      this.puppies = this.puppiesDe;
      this.contact = this.contactDe;
    }
  }

}
