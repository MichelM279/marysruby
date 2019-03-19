import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: String;
  private newsDe = 'Aktuelles';
  private newsEn = 'News';

  constructor(private languageService: LanguageService,
    private router: Router) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  onALitter() {
    this.router.navigateByUrl('/a');
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.news = this.newsEn;
    } else {
      this.news = this.newsDe;
    }
  }

}
