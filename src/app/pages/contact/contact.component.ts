import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
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

  message: String;
  private messageDe = 'Nachricht';
  private messageEn = 'Message';

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

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.title = this.titleEn;
      this.message = this.messageEn;
    } else {
      this.title = this.titleDe;
      this.message = this.messageDe;
    }
  }

}
