import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 /*  username!: string;
  password!: string; */
  registerForm:any = FormGroup;
  submitted = false;
  username!: string;
  password!: string;
  constructor(private authService: AuthService, private router: Router, private formBuilder : FormBuilder) {}
  get f() { return this.registerForm.controls; }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
     username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });
  }

  onSubmit() {

    this.submitted = true;
    if(this.submitted)
  {
    alert("Great!!");
  }

    if (this.authService.login(this.username, this.password))
    
    {
      
      this.router.navigate(['/weather']);
    }  
    
  

  }
}
