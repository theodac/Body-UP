import {Injectable, Type} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
 static getClassName(Class){
    var positionString: string;
     positionString = Class.name.indexOf("Page");
    var className = Class.name.slice(0,positionString).toLowerCase();
    return className;
  }
}
