import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLinksComponent } from './post-links.component';

describe('PostLinksComponent', () => {
  let component: PostLinksComponent;
  let fixture: ComponentFixture<PostLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
