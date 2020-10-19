import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { GoogletranslateService } from '../../service.service';

import { GoogleObj } from '../dashboard/model/Google.obj';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  val: string = '';
   public Editor = ClassicEditor;
   private translateBtn: any;
   value:string=""
   googleAddObj:GoogleObj
   valq: any;
   contactForm: FormGroup;
   states: any;
   languages: void;
   lan: any;
  // form: FormGroup;
constructor(private google: GoogletranslateService,private fb: FormBuilder){
  this.googleAddObj=new GoogleObj()
}

  ngOnInit() {
    this.contactForm = new FormGroup({
      language: new FormControl(''),
  });
  
  console.log(this.contactForm.value)
  this.lan=this.contactForm.value.language
  console.log("language",this.lan)
    this.translateBtn = document.getElementById("translateBtn");
  }

  send() {
    this.lan=this.contactForm.value.language
    console.log(this.lan)
    var data=`USM is providing cutting-edge Artificial 
    Intelligence (AI) solutions to transform your business.
     Though we started our journey as an IT staffing firm,
      USM has steadily evolved as a leading provider of 
      technology-driven solutions. We have immense experience
       in embedding high-tech AI capabilities in Robotic
        Process Automation (RPA), Virtualization, Predictive
         Analytics, Natural Language Processing, Text-to-Speech 
         and Deep Learning-based projects.

    Our team of technologists, with best practices, help
     clients in automating their workflows & IT processes,
      re-designing the conventional approaches that our clients
       follow to do their business, enhancing their customer
        satisfaction, and finally strengthening our customers
         business value in the market.`;
     var data= this.val;
   console.log("data",data)

     var data1= this.val;

    this.googleAddObj.q=[data]
    this.googleAddObj.target=this.lan

   // this.translateBtn.disabled = true;
    this.google.translate(this.googleAddObj).subscribe( (res: any) => {
  //  this.translateBtn.disabled = false;
    this.value=res.data.translations[0].translatedText
   this.val=this.value
 
   console.log(this.val)
    },
    err => {
    console.log(err);
    }
  )
}
}
