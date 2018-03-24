import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';

var localStorage = window.localStorage

class Credentials {
  email: string;
  password: string;
}
interface ServerResponse {
  type: boolean;
  data: any;
  token: any;
}

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
  public credentials: Credentials;

  constructor(public auth: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  onSubmit() {
    this.auth.login(this.credentials)
      .subscribe((res: ServerResponse) => {
        console.log(res);
        if (res.type === true) {
          localStorage.setItem('authorization', res.token);
          this.credentials.email = "";
          this.credentials.password = "";
          this.router.navigateByUrl('Admin-Home');
          console.log(res.data)
        } else if (this.credentials.email != 'asarelc@gmail.com') {
          alert('Wrong email!');
        } else if (this.credentials.password != 'wu4azare') {
          alert('Wrong password!');
        }
      }, (err) => {
        console.log(err);
        console.log(this.credentials);
      });
  }

}
