import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  data =[
    {
      name:'primary',
      selected: false
    },
    {
      name:'secondary',
      selected: false
    },
    {
      name:'tertiary',
      selected: true
    },
    {
      name:'success',
      selected: true
    },

  ]
  constructor() { }

  ngOnInit() {
  }
  onClick(check: any){
    console.log(check);
  }
}
