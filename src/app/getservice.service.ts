import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  constructor() { }

  data: any
  setData(res: any) {
    this.data = res;
    console.log(this.data);
  }

  getData() {
    return this.data
  }
}
