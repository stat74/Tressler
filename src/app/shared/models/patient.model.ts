import {Condition} from './condition.model';

export class Patient {
  id: string;
  name: string;
  gender: string;
  dob: Date;
  conditionList: Condition[];

  constructor(theName: string, theGender: string, theDate: Date, theId: string) {
    this.name = theName;
    this.gender = theGender;
    this.dob = theDate;
    this.id = theId;
    this.conditionList = [];
  }
}
