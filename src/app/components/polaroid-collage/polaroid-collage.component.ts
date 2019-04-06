import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polaroid-collage',
  templateUrl: './polaroid-collage.component.html',
  styleUrls: ['./polaroid-collage.component.scss']
})
export class PolaroidCollageComponent implements OnInit {

  @Input()
  titleDe: String;
  @Input()
  titleEn: String;

  @Input()
  private text1De: String;
  @Input()
  private text1En: String;
  @Input()
  private text2De: String;
  @Input()
  private text2En: String;
  @Input()
  private text3De: String;
  @Input()
  private text3En: String;
  @Input()
  private text4De: String;
  @Input()
  private text4En: String;

  @Input()
  imgPath1: String;
  @Input()
  imgPath2: String;
  @Input()
  imgPath3: String;
  @Input()
  imgPath4: String;

  @Input()
  private nav1: string;
  @Input()
  private nav2: string;
  @Input()
  private nav3: string;
  @Input()
  private nav4: string;

  text1: String;
  text2: String;
  text3: String;
  text4: String;

  constructor(private router: Router, private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.text1 = this.text1En;
      this.text2 = this.text2En;
      this.text3 = this.text3En;
      this.text4 = this.text4En;
    } else {
      this.text1 = this.text1De;
      this.text2 = this.text2De;
      this.text3 = this.text3De;
      this.text4 = this.text4De;
    }
  }

  routeNav1() {
    if (this.nav1) {
    this.router.navigateByUrl(this.nav1);
    }
  }

  routeNav2() {
    if (this.nav2) {
    this.router.navigateByUrl(this.nav2);
    }
  }

  routeNav3() {
    if (this.nav3) {
    this.router.navigateByUrl(this.nav3);
    }
  }

  routeNav4() {
    if (this.nav4) {
    this.router.navigateByUrl(this.nav4);
    }
  }


}
