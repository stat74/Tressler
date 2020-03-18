import { Injectable } from '@angular/core';
import {Patient} from '../shared/models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {
  data: Patient[];
  index: number;
}
