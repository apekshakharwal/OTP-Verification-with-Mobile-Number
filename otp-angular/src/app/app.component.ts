import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { VerificationService } from './verification.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otp-angular';
  registerForm !: FormGroup;
  public success = 0;
  constructor(private fb: FormBuilder, private service: VerificationService) {
    
    this.registerForm = this.fb.group({
      number: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
      otp: ['', Validators.required]
    });

  }

  ngOnit() { }

  submitnumber(data: any) {
    console.log(typeof(data.number))
    let obj = {
      number :"+91"+ data.number,
      otp : data.otp
    }

  console.log(obj);
  
    this.service.sendotp(obj).subscribe((res: any) => {

      if (res.success == 1) {
        alert(res.message);
        this.success = 1;
      }
    })
  }

  submitotp(data: any) {
    let obj = {
      number :"+91"+ data.number,
      otp : data.otp
    }
    this.service.verifyotp(obj).subscribe((res: any) => {
      if (res.success == 1) {
        alert(res.message)
        this.success = 0;
      }
      else if (res.success == 0) {
        alert(res.message)
        this.success = 1;
      }
    })
  }

}