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

  imageObject: Array<ImageObject> = [{
    image: 'assets/aWurf/gallery_1.JPG',
    thumbImage: 'assets/aWurf/gallery_1_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_2.JPG',
    thumbImage: 'assets/aWurf/gallery_2_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_3.JPG',
    thumbImage: 'assets/aWurf/gallery_3_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_4.JPG',
    thumbImage: 'assets/aWurf/gallery_4_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_5.JPG',
    thumbImage: 'assets/aWurf/gallery_5_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_6.JPG',
    thumbImage: 'assets/aWurf/gallery_6_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_7.JPG',
    thumbImage: 'assets/aWurf/gallery_7_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_8.JPG',
    thumbImage: 'assets/aWurf/gallery_8_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_9.JPG',
    thumbImage: 'assets/aWurf/gallery_9_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_10.JPG',
    thumbImage: 'assets/aWurf/gallery_10_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_11.JPG',
    thumbImage: 'assets/aWurf/gallery_11_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_12.JPG',
    thumbImage: 'assets/aWurf/gallery_12_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_13.JPG',
    thumbImage: 'assets/aWurf/gallery_13_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_14.JPG',
    thumbImage: 'assets/aWurf/gallery_14_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_15.JPG',
    thumbImage: 'assets/aWurf/gallery_15_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_16.JPG',
    thumbImage: 'assets/aWurf/gallery_16_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_17.JPG',
    thumbImage: 'assets/aWurf/gallery_17_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_18.JPG',
    thumbImage: 'assets/aWurf/gallery_18_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_19.JPG',
    thumbImage: 'assets/aWurf/gallery_19_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_20.JPG',
    thumbImage: 'assets/aWurf/gallery_20_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_21.JPG',
    thumbImage: 'assets/aWurf/gallery_21_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_22.JPG',
    thumbImage: 'assets/aWurf/gallery_22_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_23.JPG',
    thumbImage: 'assets/aWurf/gallery_23_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_24.JPG',
    thumbImage: 'assets/aWurf/gallery_24_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_25.JPG',
    thumbImage: 'assets/aWurf/gallery_25_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_26.JPG',
    thumbImage: 'assets/aWurf/gallery_26_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_27.JPG',
    thumbImage: 'assets/aWurf/gallery_27_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_28.JPG',
    thumbImage: 'assets/aWurf/gallery_28_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_29.JPG',
    thumbImage: 'assets/aWurf/gallery_29_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_30.JPG',
    thumbImage: 'assets/aWurf/gallery_30_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_31.JPG',
    thumbImage: 'assets/aWurf/gallery_31_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_32.JPG',
    thumbImage: 'assets/aWurf/gallery_32_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_33.JPG',
    thumbImage: 'assets/aWurf/gallery_33_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_34.JPG',
    thumbImage: 'assets/aWurf/gallery_34_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_35.JPG',
    thumbImage: 'assets/aWurf/gallery_35_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_36.JPG',
    thumbImage: 'assets/aWurf/gallery_36_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_37.JPG',
    thumbImage: 'assets/aWurf/gallery_37_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_38.JPG',
    thumbImage: 'assets/aWurf/gallery_38_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_39.JPG',
    thumbImage: 'assets/aWurf/gallery_39_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_40.JPG',
    thumbImage: 'assets/aWurf/gallery_40_thumb.JPG'
  }, {
    image: 'assets/aWurf/gallery_41.JPG',
    thumbImage: 'assets/aWurf/gallery_41_thumb.JPG'
  }, {
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
    } else {
      this.headline = this.headlineDe;
    }
  }

}
