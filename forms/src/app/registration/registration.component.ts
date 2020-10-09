import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor() {}
  person: any = {};
  ngOnInit(): void {
    this.person = {
      firstName: 'Nayan',
      lastName: 'Kela',
    };
  }
  submitForm = (form: any) => {};

  clearForm = (form: any) => {
    form.reset();
    form.submitted = false;
  };
}
