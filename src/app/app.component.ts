import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contriStatus: string = "You have not contributed yet!"
  contributed = false;

  onContri() {
    this.contributed = true;
    this.contriStatus = "Thanks for your contribution!"
  }
}
