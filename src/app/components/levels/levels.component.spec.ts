import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsComponent } from './levels.component';
import { signal } from '@angular/core';
import { Trip } from '../../models/trip.interface';
import { TransportService } from '../../services/transport.service';

describe('LevelsComponent', () => {
  let component: LevelsComponent;
  let fixture: ComponentFixture<LevelsComponent>;
  let mockTrips = signal<Trip[]>([]);

  const mockTransportService = {
    getTrips: mockTrips
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelsComponent],
      providers: [
        { provide: TransportService, useValue: mockTransportService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getColor() should return correct color for levels 1 to 2', () => {
    expect(component.getColor(1)).toBe('#3F51B5');
    expect(component.getColor(2)).toBe('#2196F3');
  });

  it('getColor() should return default color for unsupported levels', () => {
    expect(component.getColor(99)).toBe('#000');
  });

});
