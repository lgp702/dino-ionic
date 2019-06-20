import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

import { ActityOptions } from '../../interfaces/actity-options'

import { ConfigService } from '../../config/config.service'
import { UtilityService } from '../../utility/utility.services'
import { UserData } from '../../providers/user-data'
import { LoadingSerProvider } from '../../providers/Loading';

@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
  styleUrls: ['./confirmation.scss']
})
export class ConfirmationPage {
  submitted = false
  mainForm: ActityOptions = {
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

  public actityTypeList = [{ name: '线上活动', isChecked: false }, { name: '线下活动', isChecked: false }]

  constructor(
    public userData: UserData,
    public router: Router,
    public confService: ConfigService,
    public utility: UtilityService,
    public loading: LoadingSerProvider
    ) {
      this.loading.show()
    this.userData.getUsername().then(username => {
      this.confService.loadData(username).subscribe((res: any) => {
        try {
          console.log(res)
          if (res && res.code === '000000' && res.data.length > 0) {
            this.mainForm.name = res.data[0].name
            this.mainForm.date1 = res.data[0].date1
            this.mainForm.date2 = res.data[0].date2
            this.mainForm.delivery = res.data[0].delivery.data[0] === 1
            this.mainForm.type = res.data[0].eventType
            this.mainForm.resource = res.data[0].resource
            this.mainForm.desc = res.data[0].description
          } else {
            this.utility.notification(res.error.exception || 'error')
          }
          this.loading.hide()
        } catch (error) {
          this.loading.hide()
          this.utility.notification(error.message)
        }
      })
    })
  }

  onCreate() {
    return this.router.navigateByUrl('/createactivity');
  }

  onLogout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/login');
    })
  }

}
