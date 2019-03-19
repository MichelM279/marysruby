import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/datatypes/language';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {

  title: String;
  private titleDe = 'Impressum';
  private titleEn = 'Legal Notice';

  betreiberin: String;
  private betreiberinDe = 'Betreiberin der Webseite';
  private betreiberinEn = 'Website Operator';

  zucht: String;
  private zuchtDe = 'Hundezucht';
  private zuchtEn = 'Dog kennel';

  ansprechpartner: String;
  private ansprechpartnerDe = 'Ansprechpartner';
  private ansprechpartnerEn = 'Contact Person';

  club: String;
  private clubDe = 'Club Mitgliedschaften';
  private clubEn = 'Club memberships';

  verantwortlich: String;
  private verantwortlichDe = 'Verantwortlich für den Inhalt';
  private verantwortlichEn = 'Responsible for all content';

  disclaimer: String;
  private disclaimerDe = 'Haftungsausschluss';
  private disclaimerEn = 'Disclaimer';

  inhalteDritter: String;
  private inhalteDritterDe = 'Inhalte Dritter Anbieter (externe Links)';
  private inhalteDritterEn = 'Third Party Content (external links)';

  inhalteDritterText1: String;
  // tslint:disable
  private inhalteDritterText1De = ''.concat(
    "Mit Urteil vom 12. Mai 1998 hat das LG Hamburg entschieden, ",
    "dass man durch die Ausbringung eines Links die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. ",
    "Dies kann, so das LG, nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert. ",
    "Im Webangebot von 'Mary's Ruby' wird an verschiedenen Stellen auf Internetseiten bzw. Inhalte oder Banner von Drittanbietern verwiesen (externe Links). ",
    "Für alle diese Verweise gilt: ");
  private inhalteDritterText1En = ''.concat(
    "By judgment of May 12, 1998, the LG Hamburg has decided ",
    "that by providing a link, the contents of the linked site have to be taken responsibility for. ",
    "This can, according to the LG, only be prevented by expressly distancing oneself from these contents. ",
    "The website of 'Mary's Ruby' refers to websites, contents or banners of third parties (external links). ",
    "For all these references applies:"
    );

  inhalteDritterText2: String;
  private inhalteDritterText2De = ''.concat(
    "'Mary's Ruby' erklärt ausdrücklich, dass es keinerlei Einfluss auf Gestaltung oder Inhalte der Seiten von Dritten hat, ",
    "auf die in diesem Webangebot verwiesen wird. ",
    "Es distanziert sich daher ausdrücklich von allen Inhalten dieser externen Seiten, auf die in diesem Webangebot verwiesen wird, ",
    "und macht sich diese Inhalte auch nicht zu Eigen."
  );
  private inhalteDritterText2En = ''.concat(
    "'Mary's Ruby' 'expressly declares that it has no influence on the design or content of third party sites ",
    "referenced in this web site. ",
    "Therefore, it expressly dissociates itself from all contents of these external sites, which are referred to in this website, ",
    "and does not adopt these contents as its own."
  );
  // tslint:enable

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.subscribe(language => this.languageChanged(language));
    this.languageChanged(this.languageService.language);
  }

  private languageChanged(language: Language) {
    if (language === Language.ENGLISH) {
      this.title = this.titleEn;
      this.betreiberin = this.betreiberinEn;
      this.zucht = this.zuchtEn;
      this.ansprechpartner = this.ansprechpartnerEn;
      this.club = this.clubEn;
      this.verantwortlich = this.verantwortlichEn;
      this.disclaimer = this.disclaimerEn;
      this.inhalteDritter = this.inhalteDritterEn;
      this.inhalteDritterText1 = this.inhalteDritterText1En;
      this.inhalteDritterText2 = this.inhalteDritterText2En;
    } else {
      this.title = this.titleDe;
      this.betreiberin = this.betreiberinDe;
      this.zucht = this.zuchtDe;
      this.ansprechpartner = this.ansprechpartnerDe;
      this.club = this.clubDe;
      this.verantwortlich = this.verantwortlichDe;
      this.disclaimer = this.disclaimerDe;
      this.inhalteDritter = this.inhalteDritterDe;
      this.inhalteDritterText1 = this.inhalteDritterText1De;
      this.inhalteDritterText2 = this.inhalteDritterText2De;
    }
  }

}
