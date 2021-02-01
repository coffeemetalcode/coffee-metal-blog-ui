import { Component, OnInit } from '@angular/core';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-links',
  templateUrl: './post-links.component.html',
  styleUrls: ['./post-links.component.scss']
})
export class PostLinksComponent implements OnInit {
  links = {
    "2020": {
      "November": ["november-1", "november-2"],
      "December": ["december-1", "december-2"]
    },
    "2021": {
      "January": ["january-1", "january-2"],
      "February": []
    }
  };
  isCollapsed = false;
  faAngleRight = faAngleRight;

  constructor() { }

  ngOnInit(): void {
    console.log(this.links);
  }

  isExpanded(): number {
    return this.isCollapsed ? 0 : 90;
  }

}
