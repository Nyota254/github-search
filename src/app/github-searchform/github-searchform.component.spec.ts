import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchformComponent } from './github-searchform.component';

describe('GithubSearchformComponent', () => {
  let component: GithubSearchformComponent;
  let fixture: ComponentFixture<GithubSearchformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSearchformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
