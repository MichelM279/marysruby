import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';

@Component({
  selector: 'app-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.scss']
})
export class PolaroidComponent implements OnInit {

  @Input()
  private textDe: String;

  @Input()
  private textEn: String;

  @Input()
  imgPath: String;

  text: String;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.text = this.textEn;
    } else {
      this.text = this.textDe;
    }
  }

}
