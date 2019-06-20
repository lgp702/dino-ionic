import { Injectable } from '@angular/core'
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(
    public toastCtrl: ToastController
    ) {}

  async notification(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg || '',
      duration: 3000
    })
    await toast.present()
  }
}
