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

  constructor(private router: Router, private languageService: LanguageService) { }

  ngOnInit() {
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

}
