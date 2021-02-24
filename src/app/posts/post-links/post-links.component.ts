import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PostLinksService } from './post-links.service';
import { Link } from './post-links.model';

@Component({
  selector: 'app-post-links',
  templateUrl: './post-links.component.html',
  styleUrls: ['./post-links.component.scss']
})
export class PostLinksComponent implements OnInit {
  links: Link[] = [];
  isLoading = false;
  private _linksSub = new Subscription;

  constructor(public linksService: PostLinksService) { }

  ngOnInit(): void {
    this.linksService.getPostLinks();

    this._linksSub = this.linksService.getUpdatedLinks()
     .subscribe((links: Link[]) => {
      this.links = links;
     });
      

    // this._linksSub
  }

  handleLink(id) {
    console.log('handle link works');
    console.log('post id', id);
  }

}
