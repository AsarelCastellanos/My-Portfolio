import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../_services/contact/contact.service';
import { Router } from '@angular/router';
import { error } from 'util';

class Contact {
  userName: String;
  userEmail: String;
  userPhoneNumber: String;
  userComments: String;
}

interface ServerResponse {
  type: boolean;
  data: any;
}

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contact: Contact;

  constructor(public contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contact = new Contact();
  }

  onSubmit() {
    console.log(this.contact);
    this.contactService.contact(this.contact)
      .subscribe((res: ServerResponse) => {
        console.log(res);
        if (error) {
          throw error;
        }
      });
  }

}
