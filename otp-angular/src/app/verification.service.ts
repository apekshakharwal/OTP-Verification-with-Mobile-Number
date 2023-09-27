import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) { }

  sendotp(data: any) {
    return this.http.post("http://localhost:3000/sendOTP", data);
  }

  verifyotp(data: any) {
    return this.http.post("http://localhost:3000/verifyOTP", data);
  }

}
