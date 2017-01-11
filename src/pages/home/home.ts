import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Human } from '../../providers/human'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  people: any;
  loading: any;
  constructor(public navCtrl: NavController, public human: Human, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.load();
  }

   presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
      
    });
    this.loading.present();
  }


   doRefresh(refresher) {
        this.human.loadStrangers().
    subscribe(data =>{
      
      this.people = data.results;
      refresher.complete();
    }, err =>{

    })   
  }


  load(){
    this.presentLoading();
    this.human.loadStrangers().
    subscribe(data =>{
      
      this.people = data.results;
      console.log(this.people);
      this.loading.dismiss();
    }, err =>{

    })
  }

}
