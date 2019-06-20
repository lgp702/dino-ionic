import { Component, ViewEncapsulation } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { UserData } from '../../providers/user-data'
import { ActityOptions } from '../../interfaces/actity-options'

import { ConfigService } from '../../config/config.service'
import { UtilityService } from '../../utility/utility.services'
import { LoadingSerProvider } from '../../providers/Loading';

@Component({
  selector: 'page-create-activity',
  templateUrl: 'create-activity.html',
  styleUrls: ['./create-activity.scss']
})
export class CreateActivityPage {
  submitted = false
  mainForm: ActityOptions = null

  public actityTypeList = [{ name: '线上活动', isChecked: false }, { name: '线下活动', isChecked: false }]

  constructor(
    public router: Router,
    public confService: ConfigService,
    public utility: UtilityService,
    public userData: UserData,
    public loading: LoadingSerProvider
    ) {
    this.userData.isLoggedIn().then(loggedIn => {
      if (loggedIn === false) {
        this.router.navigateByUrl('/login')
      }
    })

    this.mainForm = {
      username: '',
      name: '',
      // region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: '',
      resource: '',
      desc: ''
    }
  }

  onCreate(form: NgForm) {
    this.submitted = true

    if (form.valid) {
      this.loading.show()
      this.userData.getUsername().then(username => {
        this.mainForm.username = username

        this.mainForm.type = ''
        this.actityTypeList.forEach(element => {
          if (element.isChecked === true) {
            if (this.mainForm.type !== '') {
              this.mainForm.type += ','
            }
            this.mainForm.type += element.name
          }
        })

        this.confService.createActity(this.mainForm).subscribe((data: any) => {
          try {
            if (data && data.code === '000000') {
              this.utility.notification('Create successfully!')
              this.router.navigateByUrl('/confirmation')
            } else {
              this.utility.notification(data.error.exception || 'error')
            }
            this.loading.hide()
          } catch (error) {
            this.loading.hide()
            this.utility.notification(error.message)
          }
        })
      })
    }
  }

  onLogout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/login');
    })
  }

}
