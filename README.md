# OTP Verification with mobile number using Angular, Node.js and Twilio Verify
### Installations
 To run the server first you need to the following programs installed on your machine.
- Angular - [v15.2.6](https://www.npmjs.com/package/@angular/cli/v/15.2.6)
- Node.js - [v18.13.0](https://nodejs.org/en/download)
### Twilio Verify
Step 1: Create account  [Twilio](https://www.twilio.com/en-us)

Step 2: Create a Verify Service
Where you will get credentials 
- Account SID
- Auth Token

Step 3: Send and verify your OTP
Where you get code go for node.js code
- First, I have make an API request to send an OTP via SMS to your phone number.

**Api route POST :  _/sentOTP_**
- Then you will be prompted to enter the OTP. This will be used in the second API request to verify the OTP.

**Api route POST : _/verifyOTP_**

### Starting the server 
If you have the all installations ready, run the following commands in your editor

To install the packages required by the server.
```
npm install
```
To start your server on the machine

- **For Angular** 
```
ng serve
```

- **For Node** 
```
node app.js
```

After serving visiti to `http://localhost:4200/`


![Enter number](https://github.com/apekshakharwal/OTP-Verification-with-Mobile-Number/assets/91956309/4453a006-79a1-4481-8e87-458d040eeb1b)


![Otp verified](https://github.com/apekshakharwal/OTP-Verification-with-Mobile-Number/assets/91956309/b1a8bc6d-ea14-4ab1-a693-7437ed276099)

