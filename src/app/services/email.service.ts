import { Injectable } from '@angular/core';
import { Contact } from 'src/app/datatypes/contact';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendContactEmail(contact: Contact) {
    console.log(contact);
  }
}
