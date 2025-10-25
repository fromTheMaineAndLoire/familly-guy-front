import { Component, Input } from '@angular/core';
import { Griffin } from './griffin.interface';


@Component({
  selector: 'app-grifin',
  imports: [],
  templateUrl: './grifin.html',
  styleUrl: './grifin.css'
})
export class Grifin {

  members: Griffin[] = [];

 

  constructor() {
    // You can add any initialization logic here 
    this.members = [
      {
        firstName: 'Peter',
        lastName: 'Griffin',
        image: 'assets/images/Peter_Griffin.png',
        age: 42,
        occupation: 'Businessman'
      },
      {
        firstName: 'Lois',
        lastName: 'Griffin',
        image: 'assets/images/Lois_Griffin.png',
        age: 40,
        occupation: 'Housewife'
      },
      {
        firstName: 'Stewie',
        lastName: 'Griffin',
        image: 'assets/images/Stewie_Griffin.png',
        age: 1,
        occupation: 'Infant'
      },
      {
        firstName: 'Brian',
        lastName: 'Griffin',
        image: 'assets/images/Brian_Griffin.png',
        age: 7,
        occupation: 'Bartender'
      },
      {
        firstName: 'Meg',
        lastName: 'Griffin',
        image: 'assets/images/Meg_Griffin.png',
        age: 16,
        occupation: 'Student'
      },
      {
        firstName: 'Chris',
        lastName: 'Griffin',
        image: 'assets/images/Chris_Griffin.png',
        age: 14,
        occupation: 'Student'
      }
    ];
  }

  ngOnInit() {
    // You can add any initialization logic here
  }
  

}
