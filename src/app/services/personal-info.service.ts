import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonalInfo } from '../models/profile-models';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  private personalInfo: BehaviorSubject<PersonalInfo> = new BehaviorSubject(new PersonalInfo('','','',undefined,undefined));

  constructor() { }

  getPersonalInfo = () : Observable<PersonalInfo> => {
    return this.personalInfo.asObservable();
  }

  setPersonalInfo = (val : PersonalInfo) => {
    this.personalInfo.next(val);
  }
}
