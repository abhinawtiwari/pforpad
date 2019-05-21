import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor.model';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.css']
})
export class DonorsListComponent implements OnInit {
  donors: Donor[];
  
  constructor(private donorService: DonorService) { }

  ngOnInit() {
    this.donors = this.donorService.getDonors();
    this.donorService.donorAdded
      .subscribe(
        (donors: Donor[]) => {
          this.donors = donors;
        }
      );
  }

}
