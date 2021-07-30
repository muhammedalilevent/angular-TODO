import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  deger;

  ngOnInit(): void {
  }

  constructor() { }

  // inputValue;




  addListItem() {
    console.log();

  }
  inputValue(event) {
    console.log(event.target.value);
    this.deger = event.target.value

  }

}
