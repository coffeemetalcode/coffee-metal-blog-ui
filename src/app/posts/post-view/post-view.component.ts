import { Component, OnInit } from '@angular/core';

import { BLOGGER } from '../../mocks/blogger';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  blogger: any = BLOGGER;

  constructor() { }

  ngOnInit(): void {
    // this.generateBlogTree();
    this.getPrettyDate('2021-01-25T07:16:00-05:00');
  }

  generateBlogTree(): void {
    const posts = this.blogger.items;
    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].published);
    }
    console.log('posts', posts);
  }

  // 2021-01-25T07:16:00-05:00

  getPostMonth(date: string): string {
    const numericMonth = date.substr(5, 2);
    const months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    };
    return months[numericMonth];
  }

  getPostDay(date: string): string {
    return date.substr(8, 2);
  }

  getPostYear(date: string): string {
    return date.substr(0, 4);
  }

  getPrettyDate(date: string): string {
    console.log(
      `${this.getPostMonth(date)} ${this.getPostDay(date)}, ${this.getPostYear(date)}`
    );
    return `${this.getPostMonth(date)} ${this.getPostDay(date)}, ${this.getPostYear(date)}`;
  }

}
