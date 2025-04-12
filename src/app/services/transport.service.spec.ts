import { TestBed } from '@angular/core/testing';

import { TransportService } from './transport.service';

describe('TransportService', () => {
  let service: TransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new trip to the trips array', () => {
    service.addNewTrip('DEL', 'MUM');
    const trips = service.getTrips();

    expect(trips.length).toBe(1);
    expect(trips[0].startLocation).toBe('DEL');
    expect(trips[0].endLocation).toBe('MUM');
    expect(trips[0].isContinued).toBeFalse();
    expect(trips[0].level).toBe(1);
  });

  it('should mark trip as continued if it starts from last trip’s end location', () => {
    service.addNewTrip('DEL', 'MUM');
    service.addNewTrip('MUM', 'BLR');

    const trips = service.getTrips();

    expect(trips.length).toBe(2);
    expect(trips[1].isContinued).toBeTrue();
  });

  it('should assign level 2 if the new trip is a repeat of the last trip', () => {
    service.addNewTrip('DEL', 'MUM');
    service.addNewTrip('DEL', 'MUM');

    const trips = service.getTrips();

    expect(trips.length).toBe(2);
    expect(trips[1].level).toBe(2);
    expect(trips[0].level).toBe(2); 
  });

  it('should clear all trips', () => {
    service.addNewTrip('DEL', 'MUM');
    service.clearTrips();

    const trips = service.getTrips();
    expect(trips.length).toBe(0);
  });

});
