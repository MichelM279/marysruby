import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/datatypes/language';
import { LanguageService } from 'src/app/services/language.service';
import { ImageObject } from 'src/app/datatypes/images';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  headline: String;
  private headlineDe = 'A-Wurf';
  private headlineEn = 'A-Litter';

  details: String;
  private detailsDe = 'Näheres folgt in Kürze!';
  private detailsEn = 'Details coming soon!';

  imageObject: Array<ImageObject> = [{
    image: 'assets/aWurf/gallery_sleeping.JPG',
    thumbImage: 'assets/aWurf/gallery_sleeping_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_yawn.JPG',
    thumbImage: 'assets/aWurf/gallery_yawn_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_dogpile.JPG',
    thumbImage: 'assets/aWurf/gallery_dogpile_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_cuddling.JPG',
    thumbImage: 'assets/aWurf/gallery_cuddling_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_cozy.JPG',
    thumbImage: 'assets/aWurf/gallery_cozy_thumb.JPG'
  }
  ];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.headline = this.headlineEn;
      this.details = this.detailsEn;
    } else {
      this.headline = this.headlineDe;
      this.details = this.detailsDe;
    }
  }

}
