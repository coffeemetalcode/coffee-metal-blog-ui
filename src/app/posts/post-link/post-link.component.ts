import { Component, OnInit } from '@angular/core';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.scss']
})
export class PostLinkComponent implements OnInit {
  isCollapsed = true;
  faAngleRight = faAngleRight;

  constructor() { }

  ngOnInit(): void {
  }

  isExpanded(): number {
    return this.isCollapsed ? 0 : 90;
  }

}
