import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arma',
  templateUrl: './arma.component.html',
  styleUrls: ['./arma.component.css']
})
export class ArmaComponent implements OnInit {

  constructor() { }

  @Input() name;

  ngOnInit() {
  }

}
