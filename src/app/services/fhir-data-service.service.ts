import { Injectable } from '@angular/core';
import {Patient} from '../shared/models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class FhirDataService {

  constructor() { }

  loadAllPatientData() {
    // @ts-ignore
    const client = FHIR.client('https://r2.smarthealthit.org');
    return client.request('Patient/');
  }

  loadThisPatientData(aPatient: string) {
    // @ts-ignore
    const client = FHIR.client('https://r2.smarthealthit.org');
    return client.request('Patient/'.concat(aPatient).concat('/$everything'));
  }

}
