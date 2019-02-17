import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navHome() {
    this.router.navigateByUrl('/home');
  }

  navAbout() {
    this.router.navigateByUrl('/about');
  }

  navElla() {
    this.router.navigateByUrl('/ella');
  }

  navJames() {
    this.router.navigateByUrl('/james');
  }

  navLitters() {
    this.router.navigateByUrl('/litters');
  }

  navFotos() {
    this.router.navigateByUrl('/fotos');
  }

}
