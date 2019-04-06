import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-card-with-routing',
  templateUrl: './news-card-with-routing.component.html',
  styleUrls: ['./news-card-with-routing.component.scss']
})
export class NewsCardWithRoutingComponent implements OnInit {

  @Input()
  private titleDe: string;

  @Input()
  private titleEn: string;

  @Input()
  date: string;

  @Input()
  private textDe: string;

  @Input()
  private textEn: string;

  @Input()
  private targetRoute: string;

  title: string;
  text: string;

  constructor(private languageService: LanguageService,
    private router: Router) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.title = this.titleEn;
      this.text = this.textEn;
    } else {
      this.title = this.titleDe;
      this.text = this.textDe;
    }
  }

  onRouting() {
    this.router.navigateByUrl(this.targetRoute);
  }

}
