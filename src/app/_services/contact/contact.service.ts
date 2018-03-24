import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { baseUrl } from '../httpBaseUrl/httpBaseUrl';

@Injectable()
export class ContactService {

  constructor(public http: HttpClient) { }

  contact(payload) {
    const endPoint = baseUrl + '/contactFormSubmit';
    return this.http.post(endPoint, payload);
  }

}