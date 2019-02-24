import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';

@Component({
  selector: 'app-pedigree-card',
  templateUrl: './pedigree-card.component.html',
  styleUrls: ['./pedigree-card.component.scss']
})
export class PedigreeCardComponent implements OnInit {

  @Input()
  name: String;

  @Input()
  dad: String;

  @Input()
  mom: String;

  @Input()
  daddad: String;

  @Input()
  dadmom: String;

  @Input()
  momdad: String;

  @Input()
  mommom: String;

  title = 'test';
  private titleDe = 'Stammbaum';
  private titleEn = 'Pedigree';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.title = this.titleEn;
    } else {
      this.title = this.titleDe;
    }
  }

}
