import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransportService } from '../../services/transport.service';

@Component({
  selector: 'app-select-location',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-location.component.html',
  styleUrl: './select-location.component.scss'
})
export class SelectLocationComponent {

  transportService = inject(TransportService);
  startLocation!:string;
  endLocation!:string;


  addTrip() {
    if (this.startLocation && this.endLocation) {
      this.transportService.addNewTrip(this.startLocation.trim().slice(0,3).toUpperCase(), this.endLocation.trim().slice(0,3).toUpperCase());
      this.startLocation = '';
      this.endLocation = '';
    }else{
      window.alert('Please add Location')
    }
    
  }

  clear() {
    this.transportService.clearTrips();
  }
}
