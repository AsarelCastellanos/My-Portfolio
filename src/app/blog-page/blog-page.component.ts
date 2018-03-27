import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogService } from '../_services/blog/blog.service';
import { Router } from '@angular/router';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';
import { CommentService } from '../_services/comment/comment.service';

class Blog {
  author: String;
  title: String;
  content: String;
  createdDate: Date;
}

class Comment {
  discussionId: String;
  name: String;
  content: String;
  replies: [
    {
      name: String;
      content: String;
    }
  ];
  createdDate: Date;
}

interface CommentInterface {
  discussionId: String;
  name: String;
  content: String;
  replies: [
    {
      name: String;
      content: String;
    }
  ];
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
  public comment: Comment;
  public blog: Blog;
  public headerID;
  public cycleComments;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private commentService: CommentService) {
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
      console.log(params);
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
      this.http.get(baseUrl + '/postComments')
      .subscribe((data: CommentInterface) => {
        this.comment = data;
        this.cycleComments = this.comment;
        console.log(this.comment);
      });
      this.comment = new Comment;
  }

  onSubmit() {
    this.comment.discussionId = this.headerID;
    console.log(this.comment);
    this.commentService.comment(this.comment)
      .subscribe((res: ServerResponse) => {
        console.log(res);
      });
    }
}
