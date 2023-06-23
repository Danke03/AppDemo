import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'american-football',
      name: 'Action_Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon: 'basket',
      name: 'Alert',
      redirectTo:'/alert'
    },
    {
      icon: 'bulb',
      name: 'Lampara',
      redirectTo:'/home'
    },
    {
      icon: 'accessibility',
      name: 'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon: 'apps',
      name: 'Botones',
      redirectTo:'/botones'
    },
    {
    icon: 'card',
    name: 'Cards',
    redirectTo:'/card'
   },
   {
    icon: 'bug',
    name: 'Checkbox',
    redirectTo:'/checkbox'
   },
   {
    icon: 'calendar',
    name: 'Datetime',
    redirectTo:'/datetime'
   },
   {
    icon: 'refresh-circle',
    name: 'Loading',
    redirectTo:'/loading'
   },
   {
    icon: 'golf',
    name: 'Refresher',
    redirectTo:'/refresher'
   }
  ];

  constructor() { }

  ngOnInit() {
  }

}


interface Componente {
  icon: string;
  name: string,
  redirectTo: string;
}