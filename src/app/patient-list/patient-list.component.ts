import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../shared/models/patient.model';
import {PatientDataService} from '../services/patient-data.service';
import {Router} from '@angular/router';
import {FhirDataService} from '../services/fhir-data-service.service';
import {Condition} from '../shared/models/condition.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private dataRequest: any;

  get data(): Patient[] {
    return this.patientDataService.data;
  }

  constructor(private fhirService: FhirDataService, public router: Router, private patientDataService: PatientDataService) {
  }

  ngOnInit(): void {
  }

  LinktoPatient(i: number) {
    const thisPatient = this.patientDataService.data[i];
    this.dataRequest = this.fhirService.loadThisPatientData(thisPatient.id);
    this.dataRequest.then(data => {
      const conditions = data.entry.filter((val: any) => val.resource.resourceType === 'Condition');
      for (const c of conditions) {
        const name = c.resource.code.text;
        const onset = c.resource.onsetDateTime;
        thisPatient.conditionList.push(new Condition(name, onset));
      }

      this.patientDataService.index = i;
      this.router.navigateByUrl('Patient');
    });
  }
}
