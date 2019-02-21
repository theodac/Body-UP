import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public register : FormGroup;
  constructor(private formBuilder: FormBuilder ){
    this.register = this.formBuilder.group({
      objectif: [null, Validators.required]



    });


  }
  onSubmit(){

  }
}
