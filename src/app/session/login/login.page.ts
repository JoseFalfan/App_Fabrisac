import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user: string ="";
    password: string ="";
  
    user1: string ="jose";
    password1: string ="12345";

  constructor( private router : Router , private toastController: ToastController) { }

  ngOnInit() {
  }


navigate(address:string) {
  switch(address){
    case '/register':{
      this.router.navigate([address]);
      break;
    }
    case 'tabs':{
      if(this.user == this.user1 && this.password == this.password1){
        let navigationsExtras : NavigationExtras = {
          state:{
            user_name: this.user
          }
        }
        this.router.navigate([address],navigationsExtras);   
      }
      else{
        this.presentToast("Usuario o contraseña incorrectos.");
      }
    }
  }
  
}

async presentToast(msj:string) {
  const toast = await this.toastController.create({
    message: msj,
    duration: 1500,
    position: 'bottom',
  });
  await toast.present();
  }

}

