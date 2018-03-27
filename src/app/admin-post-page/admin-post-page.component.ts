import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostBlogService } from '../_services/postBlog/post-blog.service';
import { Router } from '@angular/router';

class Blog {
  author: String;
  title: String;
  content: String;
}

interface ServerResponse {
  type: boolean;
  data: any;
}

@Component({
  selector: 'app-admin-post-page',
  templateUrl: './admin-post-page.component.html',
  styleUrls: ['./admin-post-page.component.css']
})
export class AdminPostPageComponent implements OnInit {
  blog: Blog;

  constructor(public postBlog: PostBlogService, private router: Router) { }


  ngOnInit() {
    this.blog = new Blog();
  }

  onSubmit() {
    console.log(this.blog);
    this.postBlog.postBlog(this.blog)
      .subscribe((res: ServerResponse) => {
        console.log(res);
      });
  }

}
