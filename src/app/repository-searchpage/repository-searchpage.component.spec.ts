import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorySearchpageComponent } from './repository-searchpage.component';

describe('RepositorySearchpageComponent', () => {
  let component: RepositorySearchpageComponent;
  let fixture: ComponentFixture<RepositorySearchpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorySearchpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorySearchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
