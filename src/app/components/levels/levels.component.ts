import { Component, inject } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-levels',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.scss'
})
export class LevelsComponent {

  transportService = inject(TransportService)
  trips = this.transportService.getTrips


  getColor(level: number): string {
    const palette = ['#3F51B5', '#2196F3', '#FF9800'];
    return palette[level - 1] || '#000';
  }
}
