import { Injectable, EventEmitter } from '@angular/core';
import { Donor } from './donor.model';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  donorAdded = new EventEmitter<Donor[]>();
  private donors: Donor[] = [
    new Donor('Nitesh Kuhar', 'dummy@mail.com', '7777700000', null),
    new Donor('Dipanjan Das', 'dummy2@mail.com', '7777700002', null),
    
  ];
  
  constructor() { }

  getDonors() {
    return this.donors.slice();
  }

  updateDonors(name: string, email: string, phone: string, count: number) {
    this.donors.push(new Donor(name, email, phone, count));
    this.donorAdded.emit(this.donors.slice());
  }
}
