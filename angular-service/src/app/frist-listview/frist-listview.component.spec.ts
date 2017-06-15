import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FristListviewComponent } from './frist-listview.component';

describe('FristListviewComponent', () => {
  let component: FristListviewComponent;
  let fixture: ComponentFixture<FristListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FristListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FristListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
