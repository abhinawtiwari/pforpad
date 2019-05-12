import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  contriStatus: string = "You have not contributed yet!"
  contributed = false;

  constructor() { }

  ngOnInit() {
  }
  
  onContri() {
    this.contributed = true;
    this.contriStatus = "Thanks for your contribution!"
  }
}
