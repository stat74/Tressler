import { Injectable } from '@angular/core';
import {Patient} from '../shared/models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class DataUtilsService {

  public static processData(entry: any): Patient[] {
    return this.buildPatients(entry);
  }

  private static buildPatients(entry: any) {
    const theData: Patient[] = [];
    this.alphabetize(entry);
    entry.forEach((val) => {
      // console.log(val);
      const name = this.buildName(val.resource.name[0]);
      theData.push(new Patient(name, val.resource.gender, val.resource.birthDate, val.resource.id));
    });
    // console.log(theData);
    return theData;
  }

  private static buildName(nameElement: any): string {
    let result = '';
    nameElement.given.forEach((val) => {
      result = result.concat(val).concat(' ');
    });
    return result.concat(nameElement.family);
  }

  private static alphabetize(entry: any) {
    // tslint:disable-next-line:only-arrow-functions
    entry.sort(function(a: any, b: any) {
      const nameOne = a.resource.name[0].family;
      const nameTwo = b.resource.name[0].family;
      if (nameOne < nameTwo) {return -1; }
      if (nameOne > nameTwo) {return 1; }
      const lastOne = a.resource.name[0].given[0];
      const lastTwo = b.resource.name[0].given[0];
      if (lastOne < lastTwo) {return -1; }
      if (lastOne > lastTwo) {return 1; }
      return 0;
    });
  }
}
