import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingSUmmaryComponent } from './voting-summary.component';

describe('VotingSUmmaryComponent', () => {
  let component: VotingSUmmaryComponent;
  let fixture: ComponentFixture<VotingSUmmaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingSUmmaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingSUmmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
