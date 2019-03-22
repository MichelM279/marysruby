import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/app/datatypes/contact';

class HtmlBody {
  html: String;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiEndpoint = 'https://us-central1-marysrubykennel.cloudfunctions.net/sendMail';

  private headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
  // new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  sendContactEmail(contact: Contact) {
    const endpointWithQueryParameters = this.apiEndpoint + '?subject=' + 'Anfrage+von+' + contact.email;
    const htmlString = '<p>Neue Anfrage von ' + contact.name +
      '</p><p>Kontakt E-Mail: ' + contact.email +
      '</p><p>Kontakt Telefon: ' + contact.phone +
      '</p><p>Nachricht:</p><p>' + contact.message + '</p>';
    const html: HtmlBody = {html: htmlString};
    const body: string = JSON.stringify(html);
    return this.httpClient.post(endpointWithQueryParameters, body, {headers: this.headers});
  }
}
