import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'

import { Link } from './post-links.model';

@Injectable({
  providedIn: 'root'
})
export class PostLinksService {
  private _links: Link[] = [];
  private _linksUpdated = new Subject<Link[]>();

  constructor(private _http: HttpClient) { }

  getPostLinks() {
    return this._http.get<{ links: any }>('http://localhost:8085/links')
      .subscribe((links: any) => {
        this._links = links;
        this._linksUpdated.next([...this._links]);
      });
  }

  getUpdatedLinks() {
    return this._linksUpdated.asObservable();
  }
}
