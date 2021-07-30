import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  @Input() set inputValue(value) {
    console.log(value);

  }


  example = [
    {
      isim: "deneme1",
      secili: false
    },
    {
      isim: "deneme2",
      secili: false
    },
    {
      isim: "deneme3",
      secili: true
    },
    {
      isim: "deneme4",
      secili: false
    },
    {
      isim: "deneme5",
      secili: true
    },
  ]

  ngOnInit(): void {
  }

}
