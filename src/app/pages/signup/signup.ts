import { Component, ViewEncapsulation } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { UserData } from '../../providers/user-data'
import { UserOptions } from '../../interfaces/user-options'

import { ConfigService } from '../../config/config.service'
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss']
})
export class SignupPage {
  userInfo: UserOptions = { name: '', password: '' }
  submitted = false

  constructor(
    public router: Router,
    public userData: UserData,
    public confService: ConfigService,
    public toastCtrl: ToastController
    ) {}

  onSignup(form: NgForm) {
    this.submitted = true

    if (form.valid) {
      this.confService.register(this.userInfo).subscribe((data: any) => {
        if (data && data.code === '000000') {
          this.notification('Signup successfully!')
          this.userData.signup(this.userInfo.name)
          this.router.navigateByUrl('/app/tabs/schedule')
        } else {
          this.notification(data.error.exception || 'error')
        }
      })
    }
  }

  async notification(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg || '',
      duration: 3000
    })
    await toast.present()
  }
}
