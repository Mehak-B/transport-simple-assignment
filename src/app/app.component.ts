import { Component } from '@angular/core';
import { LevelsComponent } from "./components/levels/levels.component";
import { SelectLocationComponent } from "./components/select-location/select-location.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LevelsComponent, SelectLocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
