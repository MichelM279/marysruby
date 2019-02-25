import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title2: String;
  private title2De = 'Kontaktmöglichkeiten'; // 'Weitere ...'
  private title2En = 'Contact options'; // 'Further ...'

  title3: String;
  private title3De = 'Wo unsere Welpen ihre ersten Schritte machen';
  private title3En = 'Where our puppies take their first steps';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  onPhoneClick() {
    location.href = 'tel:+49 171 4871595';
  }

  onMailClick() {
    location.href = 'mailto:sarah-seidel@web.de';
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.title2 = this.title2En;
      this.title3 = this.title3En;
    } else {
      this.title2 = this.title2De;
      this.title3 = this.title3De;
    }
  }

}
