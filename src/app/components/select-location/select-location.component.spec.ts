import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLocationComponent } from './select-location.component';
import { TransportService } from '../../services/transport.service';

describe('SelectLocationComponent', () => {
  let component: SelectLocationComponent;
  let fixture: ComponentFixture<SelectLocationComponent>;
  let transportServiceSpy: jasmine.SpyObj<TransportService>;


  beforeEach(async () => {
    transportServiceSpy = jasmine.createSpyObj('TransportService', ['addNewTrip', 'clearTrips']);

    await TestBed.configureTestingModule({
      imports: [SelectLocationComponent],
      providers: [
        { provide: TransportService, useValue: transportServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call addNewTrip() with formatted values when both start and end locations are provided', () => {
    component.startLocation = ' delhi ';
    component.endLocation = ' mumbai ';
    
    component.addTrip();

    expect(transportServiceSpy.addNewTrip).toHaveBeenCalledOnceWith('DEL', 'MUM');
    expect(component.startLocation).toBe('');
    expect(component.endLocation).toBe('');
  });

  it('should alert when either location is missing', () => {
    spyOn(window, 'alert');

    component.startLocation = '';
    component.endLocation = '';

    component.addTrip();

    expect(window.alert).toHaveBeenCalledWith('Please add Location');
    expect(transportServiceSpy.addNewTrip).not.toHaveBeenCalled();
  });

  it('should call clearTrips() when clear is called', () => {
    component.clear();
    expect(transportServiceSpy.clearTrips).toHaveBeenCalled();
  });
});
