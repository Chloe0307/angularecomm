import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  logoCart = 'assets/images/cart.jpg';
  cartAlt = 'logo entreprise';
  title = ' MonPtiSite';
  
  constructor() { }

  ngOnInit(): void {
  }

}
