import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogService } from '../_services/blog/blog.service';
import { Router } from '@angular/router';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';

class Blog {
  author: String;
  title: String;
  content: String;
  createdDate: Date;
}

interface BlogInterface {
  author: String;
  title: String;
  content: String;
  createdDate: Date;
}
interface ServerResponse {
  type: boolean;
  data: any;
}


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  public blog: Blog;
  public headerID;
  public httpHead;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
    });
  }

  ngOnInit() {
    this.blog = new Blog;
    this.http.get(baseUrl + '/postBlog', {
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
      .subscribe((data: BlogInterface) => {
        this.blog = data;
        console.log(this.blog);
      });

  }

}
