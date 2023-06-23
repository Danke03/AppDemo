import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {


  titulo: string | undefined;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentInput(){
    const input = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Ingrese su nombre',
      inputs:[{
        name: 'txtNombre',
        type: 'text',
        placeholder: 'Nombre'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler:(blah)=>{
              console.log('Cancelar');
          }},
          {
            text: 'Ok',
            role: 'cancel',
            cssClass: 'secondary',
            handler:(data)=>{
                console.log('Boton Ok', data);
                this.titulo = data.txtNombre;
            }
        }
      ]
    });
   await input.present();
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Atencion',
      subHeader: 'Atencion',
      message: 'Gracias por su atencion.',
      buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler:(blah)=>{
            console.log('Cancelar');
        }},
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler:(blah)=>{
              console.log('Boton Ok');
          }
      }
    ]
    });

    await alert.present();
  }
  
}
