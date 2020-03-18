import {Component} from '@angular/core';
import {Patient} from '../shared/models/patient.model';
import {PatientDataService} from '../services/patient-data.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})

export class PatientViewComponent {

  get thisPatient(): Patient {
    if (!this.patientDataService.data) {
      return new Patient('', '', new Date('01-01-2000'), '');
    }
    return this.patientDataService.data[this.patientDataService.index];
  }

  constructor(private patientDataService: PatientDataService) { }

  direction = false;

  sortTable(param, aList) {
    this.direction = !this.direction;
    const compare = (a, b) => {
      if (!a[param] && !b[param]) {
        return 0;
      } else if (a[param] && !b[param]) {
        return -1;
      } else if (!a[param] && b[param]) {
        return 1;
      } else {
        const value1 = a[param].toString().toUpperCase(); // ignore upper and lowercase
        const value2 = b[param].toString().toUpperCase(); // ignore upper and lowercase
        if (value1 < value2) {
          return !this.direction ? -1 : 1;
        } else if (value1 > value2) {
          return !this.direction ? 1 : -1;
        } else {
          return 0;
        }
      }
    };
    return aList.sort(compare);
  }

}



