import { Injectable, signal } from '@angular/core';
import { Trip } from '../models/trip.interface';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor() { }

  private trips = signal<Trip[]>([])

  getTrips = this.trips.asReadonly();

  addNewTrip(startLocation: string, endLocation: string) {
    const trip: Trip = {
      id: Date.now(),
      startLocation,
      endLocation,
      isContinued: false,
      level: 1
    };

    const current = this.trips();
    const last = current.at(-1);

    if (last) {
      if (last.endLocation === trip.startLocation) {
        trip.isContinued = true;
      }
      if (last.startLocation === trip.startLocation && last.endLocation === trip.endLocation) {
        trip.level = 2;
        last.level = 2
      }
    }
   this.trips.set([...current, trip]);

   console.log(this.trips())
}

clearTrips(){
  this.trips.set([])

}

}