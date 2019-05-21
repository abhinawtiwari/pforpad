import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  contriStatus: string = "You have not contributed yet!"
  contributed = false;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('phoneInput') phoneInput: ElementRef;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('countInput') countInput: ElementRef;

  constructor(private donorService: DonorService) { }

  ngOnInit() {
  }
  
  onContri() {
    this.contributed = true;
    this.contriStatus = "Thanks for your contribution!";
    this.donorService.updateDonors(this.nameInput.nativeElement.value, this.phoneInput.nativeElement.value, this.emailInput.nativeElement.value, this.countInput.nativeElement.value);
    //console.log(this.donorService.getDonors());
  }
}
