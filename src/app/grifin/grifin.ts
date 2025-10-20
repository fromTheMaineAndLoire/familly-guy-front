import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-grifin',
  imports: [],
  templateUrl: './grifin.html',
  styleUrl: './grifin.css'
})
export class Grifin {

  @Input() memberFirstName: String;
  @Input() memberLastName: String;
  @Input() memberImage: String;

  constructor() {
    // You can add any initialization logic here
    this.memberFirstName = new String();
    this.memberLastName = new String();
    this.memberImage = new String();
  }

  ngOnInit() {
    // You can add any initialization logic here
  }
  

}
