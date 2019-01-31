import { Injectable } from '@angular/core';

enum Language {
  'GERMAN',
  'ENGLISH'
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _language: Language = Language.GERMAN;

  constructor() { }

  get language() {
    return this._language;
  }

  set language(language: Language) {
    this._language = language;
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
