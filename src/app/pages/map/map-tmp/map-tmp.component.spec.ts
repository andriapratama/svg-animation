import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTmpComponent } from './map-tmp.component';

describe('MapTmpComponent', () => {
  let component: MapTmpComponent;
  let fixture: ComponentFixture<MapTmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapTmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapTmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
