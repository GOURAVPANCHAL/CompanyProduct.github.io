import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavUlComponent } from './home-nav-ul.component';

describe('HomeNavUlComponent', () => {
  let component: HomeNavUlComponent;
  let fixture: ComponentFixture<HomeNavUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavUlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
