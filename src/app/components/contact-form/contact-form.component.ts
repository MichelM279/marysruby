import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { EmailService } from 'src/app/services/email.service';
import { Language } from 'src/app/datatypes/language';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/datatypes/contact';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  title: String;
  private titleDe = 'Kontakt';
  private titleEn = 'Contact';

  subtitle: String;
  private subtitleDe = 'Wir freuen uns auf Ihre Nachricht!';
  private subtitleEn = 'Please use this contact form to get in touch with us!';

  mailInvalid: String;
  private mailInvalidDe = 'Bitte geben Sie eine gültige E-Mail Adresse ein.';
  private mailInvalidEn = 'Please enter a valid e-mail address.';

  fieldRequired1: String;
  private fieldRequired1De = 'Dies ist ein ';
  private fieldRequired1En = 'This field is ';

  fieldRequired2: String;
  private fieldRequired2De = 'Pflichtfeld';
  private fieldRequired2En = 'required';

  messageText: String;
  private messageDe = 'Nachricht';
  private messageEn = 'Message';

  submit: String;
  private submitDe = 'Senden';
  private submitEn = 'Submit';

  mailSent: string;
  private mailSentDe = 'Nachricht gesendet!';
  private mailSentEn = 'Message sent!';

  snackbarClose: string;
  private snackbarCloseDe: 'Fertig';
  private snackbarCloseEn: 'Done';

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private languageService: LanguageService,
    private emailService: EmailService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  onSubmit(): void {
    // const contact: Contact = this.formToContact(this.contactForm);
    // this.emailService.sendContactEmail(contact).subscribe(res => {
    //   console.log(res);
    // });
    // TODO Error handling, incl proper response from server
    // this.snackbar.open(this.mailSent, this.snackbarClose, {duration: 6000});
    this.snackbar.open("Formular derzeit nicht verfügbar!", this.snackbarClose, {duration: 6000});
  }

  private formToContact(form: FormGroup): Contact {
    const contactDetails: Contact = new Contact(
      form.value.name,
      form.value.email,
      form.value.phone,
      form.value.message);
    return contactDetails;
  }

  private languageChanged(language: Language): void {
    if (language === Language.ENGLISH) {
      this.title = this.titleEn;
      this.messageText = this.messageEn;
      this.subtitle = this.subtitleEn;
      this.submit = this.submitEn;
      this.mailInvalid = this.mailInvalidEn;
      this.fieldRequired1 = this.fieldRequired1En;
      this.fieldRequired2 = this.fieldRequired2En;
      this.mailSent = this.mailSentEn;
      this.snackbarClose = this.snackbarCloseEn;
    } else {
      this.title = this.titleDe;
      this.messageText = this.messageDe;
      this.subtitle = this.subtitleDe;
      this.submit = this.submitDe;
      this.mailInvalid = this.mailInvalidDe;
      this.fieldRequired1 = this.fieldRequired1De;
      this.fieldRequired2 = this.fieldRequired2De;
      this.mailSent = this.mailSentDe;
      this.snackbarClose = this.snackbarCloseDe;
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get message() { return this.contactForm.get('message'); }

}
