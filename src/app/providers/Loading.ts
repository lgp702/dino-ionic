import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
/*
  Generated class for the LoadingSerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class LoadingSerProvider {
  constructor(
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello LoadingSerProvider Provider');
  }
  loading: any;
  // 显示loading
  async show() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading ... '
    });
    await this.loading.present();
  }
  // 隐藏loading
  async hide() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }
}
