import { Component, ViewEncapsulation } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { UserData } from '../../providers/user-data'
import { UserOptions } from '../../interfaces/user-options'

import { ConfigService } from '../../config/config.service'
import { UtilityService } from '../../utility/utility.services'
import { LoadingSerProvider } from '../../providers/Loading';

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
    public utility: UtilityService,
    public loading: LoadingSerProvider
    ) {
      this.userData.isLoggedIn().then(loggedIn => {
        if (loggedIn === true) {
          this.router.navigateByUrl('/createactivity')
        }
      })
    }

  onSignup(form: NgForm) {
    this.submitted = true

    if (form.valid) {
      this.loading.show()
      this.confService.register(this.userInfo).subscribe((res: any) => {
        try {
          if (res && res.code === '000000') {
            this.utility.notification('Signup successfully!')
            this.userData.signup(this.userInfo.name)
            this.router.navigateByUrl('/createactivity')
          } else {
            this.utility.notification(res.error.exception || 'error')
          }
          this.loading.hide()
        } catch (error) {
          this.loading.hide()
          this.utility.notification(error.message)
        }
      })
    }
  }
}
