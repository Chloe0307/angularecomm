import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hom-page',
  templateUrl: './hom-page.component.html',
  styleUrls: ['./hom-page.component.css']
})
export class HomPageComponent implements OnInit {

  imgPdt = 'assets/images/jpeu-pas.jpg';
  pdtAlt = 'mug je peut pas j ai Noël';
  title = 'Tassando'

  constructor() { }

  ngOnInit(): void {
  }

}
