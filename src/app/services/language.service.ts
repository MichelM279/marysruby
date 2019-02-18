import { Injectable, EventEmitter } from '@angular/core';
import { Language } from 'src/app/datatypes/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _language: Language = Language.GERMAN;

  private languageChange: EventEmitter<Language> = new EventEmitter();

  constructor() { }

  get language() {
    return this._language;
  }

  set language(language: Language) {
    this._language = language;
    this.languageChange.emit(language);
  }

  public subscribe(callbackfkt) {
    return this.languageChange.subscribe(callbackfkt);
  }

  public isGerman() {
    if (this.language === Language.GERMAN) {
      return true;
    }
    return false;
  }

  public isEnglish() {
    if (this.language === Language.ENGLISH) {
      return true;
    }
    return false;
  }
}
