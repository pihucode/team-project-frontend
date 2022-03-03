import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddressInfo } from '../models/profile-models';

@Injectable({
  providedIn: 'root'
})
export class AddressInfoService {
  private addressInfo: BehaviorSubject<AddressInfo> = new BehaviorSubject(new AddressInfo('','','',undefined));

  constructor() { }

  getAddressInfo = () : Observable<AddressInfo> => {
    return this.addressInfo.asObservable();
  }

  setAddressInfo = (val : AddressInfo) => {
    this.addressInfo.next(val);
  }

}
