import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';
import { Contact } from 'src/app/datatypes/contact';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title: String;
  private titleDe = 'Kontakt';
  private titleEn = 'Contact';

  title2: String;
  private title2De = 'Weitere Kontaktmöglichkeiten';
  private title2En = 'Further contact options';

  title3: String;
  private title3De = 'Wo unsere Welpen ihre ersten Schritte machen';
  private title3En = 'Where our puppies take their first steps';

  subtitle: String;
  private subtitleDe = 'Wir freuen uns auf Ihre Nachricht!';
  private subtitleEn = 'Please use this contact form to get in touch with us!';

  message: String;
  private messageDe = 'Nachricht';
  private messageEn = 'Message';

  submit: String;
  private submitDe = 'Senden';
  private submitEn = 'Submit';

  mailInvalid: String;
  private mailInvalidDe = 'Bitte geben Sie eine gültige E-Mail Adresse ein.';
  private mailInvalidEn = 'Please enter a valid e-mail address.';

  mailRequired1: String;
  private mailRequired1De = 'E-Mail ist ein ';
  private mailRequired1En = 'E-Mail is ';

  mailRequired2: String;
  private mailRequired2De = 'Pflichtfeld';
  private mailRequired2En = 'required';

  contactDetails = new Contact();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private languageService: LanguageService,
    private emailService: EmailService) {}

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  onSubmit() {
    this.emailService.sendContactEmail(this.contactDetails);
  }

  onPhoneClick() {
    location.href = 'tel:+49 171 4871595';
  }

  onMailClick() {
    location.href = 'mailto:sarah-seidel@web.de';
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.title = this.titleEn;
      this.title2 = this.title2En;
      this.title3 = this.title3En;
      this.message = this.messageEn;
      this.subtitle = this.subtitleEn;
      this.submit = this.submitEn;
      this.mailInvalid = this.mailInvalidEn;
      this.mailRequired1 = this.mailRequired1En;
      this.mailRequired2 = this.mailRequired2En;
    } else {
      this.title = this.titleDe;
      this.title2 = this.title2De;
      this.title3 = this.title3De;
      this.message = this.messageDe;
      this.subtitle = this.subtitleDe;
      this.submit = this.submitDe;
      this.mailInvalid = this.mailInvalidDe;
      this.mailRequired1 = this.mailRequired1De;
      this.mailRequired2 = this.mailRequired2De;
    }
  }

}
