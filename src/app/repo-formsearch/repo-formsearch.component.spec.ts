import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoFormsearchComponent } from './repo-formsearch.component';

describe('RepoFormsearchComponent', () => {
  let component: RepoFormsearchComponent;
  let fixture: ComponentFixture<RepoFormsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoFormsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoFormsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
