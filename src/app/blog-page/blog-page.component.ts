import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogService } from '../_services/blog/blog.service';
import { Router } from '@angular/router';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';
import { CommentService } from '../_services/comment/comment.service';
import { error } from 'util';

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
  public newComment: Comment;
  public blog: Blog;
  public headerID;
  public cycleComments;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private commentService: CommentService) {
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
      this.pullData();
      console.log(params);
    });
  }

  ngOnInit() {

  }

  pullData() {

    const headers = new HttpHeaders().set('ID', this.headerID);

    this.blog = new Blog;
    // HTTP Get Blogs
    this.http.get(baseUrl + '/postBlog', {
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
      .subscribe((data: BlogInterface) => {
        this.blog = data;
        console.log(this.blog);
      });
    // HTTP Get Comments
    this.http.get(baseUrl + '/postComment', { headers })
      .subscribe((data: CommentInterface) => {
        this.comment = data;
        this.cycleComments = this.comment;
        console.log(this.comment);
      });
    this.comment = new Comment;
    this.newComment = new Comment;
  }
  onSubmit() {
    this.newComment.discussionId = this.headerID;
    console.log(this.newComment);
    this.commentService.comment(this.newComment)
      .subscribe((res: ServerResponse) => {
        if (error) {
          throw error;
        }
        console.log(res);
      });
  }
}
