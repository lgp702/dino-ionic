import { Component, ViewEncapsulation } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { UserData } from '../../providers/user-data'
import { LoadingSerProvider } from '../../providers/Loading';
import { UserOptions } from '../../interfaces/user-options'

import { ConfigService } from '../../config/config.service'
import { UtilityService } from '../../utility/utility.services'

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
    public utility: UtilityService,
    public loading: LoadingSerProvider
    ) {
      this.userData.isLoggedIn().then(loggedIn => {
        if (loggedIn === true) {
          this.router.navigateByUrl('/createactivity')
        }
      })
    }

  onLogin(form: NgForm) {
    this.submitted = true

    if (form.valid) {
      this.loading.show()
      this.confService.login(this.userInfo).subscribe((data: any) => {
        try {
          if (data && data.code === '000000') {
            this.utility.notification('Login successfully!')
            this.userData.login(this.userInfo.name)
            this.router.navigateByUrl('/createactivity')
          } else {
            this.utility.notification(data.error.exception || 'error')
          }
          this.loading.hide()
        } catch (error) {
          this.loading.hide()
          this.utility.notification(error.message)
        }
      })
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup')
  }

}
