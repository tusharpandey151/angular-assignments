import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm:FormGroup; 

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.validProjectNameAsync),
      'mail' : new FormControl(null, [Validators.required, Validators.email]),
      'status' : new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  validProjectName(control:FormControl) : {[s:string]:boolean} {
    if(control.value=='test') {
      return {'projectNameTest':true};
    }
    else {
      return null;
    }
  }

  validProjectNameAsync(control:FormControl) : Promise<any>|Observable<any> {
    const promise = new Promise( 
      (resolve, reject) => {
        setInterval(()=>{
          if(control.value == 'test') {
            resolve({'projectNameTest':true});
          }
          else {
            resolve(null);
          }
        },2000)
      }
    );
    return promise;
  }
}
