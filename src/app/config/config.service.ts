import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UserOptions } from '../interfaces/user-options'
import { ActityOptions } from '../interfaces/actity-options';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  register(userInfo: UserOptions) {
    return this.http.post(environment.apiUrl + 'form01/register', userInfo)
  }

  login(userInfo: UserOptions) {
    return this.http.post(environment.apiUrl + 'form01/login', userInfo)
  }

  createActity(mainForm: ActityOptions) {
    return this.http.post(environment.apiUrl + 'form02/submit', mainForm)
  }

  loadData(username: string) {
    return this.http.get(environment.apiUrl + 'form03?username=' + username)
  }

  testCon() {
    return this.http.get(environment.apiUrl + 'form03?username=admin')
  }
}
