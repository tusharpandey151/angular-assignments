import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class CounterService {

    inactivationCounter : number = 0;
    activationCounter: number = 0;
    
    activation () {
      this.activationCounter++;  
      console.log('Activation Counter ' + this.activationCounter );
    }

    inactivation() {
        this.inactivationCounter++;
        console.log('Inactivation Counter ' + this.inactivationCounter);
    }
}