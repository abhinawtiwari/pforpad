import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor.model';

@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.css']
})
export class DonorsListComponent implements OnInit {
  donors: Donor[] = [
    new Donor('Nitesh Kuhar', 'dummy@mail.com', '7777700000', null),
    new Donor('Dipanjan Das', 'dummy2@mail.com', '7777700002', null),
    
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
