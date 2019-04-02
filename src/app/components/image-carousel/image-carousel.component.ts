import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/datatypes/language';
import { ImageObject } from 'src/app/datatypes/images';

// Documentation
// https://github.com/sanjayV/ng-image-slider

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  @Input()
  imageObject: Array<ImageObject>;

  title: String;
  private titleDe = 'Galerie';
  private titleEn = 'Gallery';

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
