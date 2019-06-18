import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UserOptions } from '../interfaces/user-options'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  register(userInfo: UserOptions) {
    return this.http.post('http://dinoappapp.w2tne5xck3.ap-northeast-1.elasticbeanstalk.com/form01/register', userInfo)
  }

  login(userInfo: UserOptions) {
    return this.http.post('http://dinoappapp.w2tne5xck3.ap-northeast-1.elasticbeanstalk.com/form01/login', userInfo)
  }

  testCon() {
    return this.http.get('http://dinoappapp.w2tne5xck3.ap-northeast-1.elasticbeanstalk.com/form03?username=admin')
  }
}
