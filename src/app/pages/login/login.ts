import { Component, ViewEncapsulation } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { UserData } from '../../providers/user-data'
import { UserOptions } from '../../interfaces/user-options'

import { ConfigService } from '../../config/config.service'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss']
})
export class LoginPage {
  userInfo: UserOptions = { name: '', password: '' }
  submitted = false

  constructor(
    public userData: UserData,
    public router: Router,
    public confService: ConfigService,
    public toastCtrl: ToastController
    ) {}

  onLogin(form: NgForm) {
    this.submitted = true

    if (form.valid) {
      this.confService.login(this.userInfo).subscribe((data: any) => {
        if (data && data.code === '000000') {
          this.notification('Login successfully!')
          this.userData.login(this.userInfo.name)
          this.router.navigateByUrl('/app/tabs/schedule')
        } else {
          this.notification(data.error.exception || 'error')
        }
      })
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup')
  }

  async notification(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg || '',
      duration: 3000
    });
    await toast.present();
  }

}
