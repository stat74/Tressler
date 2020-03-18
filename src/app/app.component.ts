import {Component, OnInit} from '@angular/core';
import {FhirDataService} from './services/fhir-data-service.service';
import {Router} from '@angular/router';
import {PatientDataService} from './services/patient-data.service';
import {DataUtilsService} from './utils/data-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tressler';
  private dataRequest;
  private readonly errorState: string;

  constructor(private fhirService: FhirDataService, public router: Router, private patientDataService: PatientDataService) {
    this.errorState = 'The Data was not loaded.  Trying refreshing the page.';
  }

  ngOnInit() {
    this.dataRequest = this.fhirService.loadAllPatientData();
    this.dataRequest.then(data => {
      this.patientDataService.data = DataUtilsService.processData(data.entry);
      this.router.navigateByUrl('List');
    });

  }

}
