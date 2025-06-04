import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm: FormGroup;
  submitted = false;
  loginError = '';

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.loginError = '';

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.loginService.login(email, password).subscribe(
      success => {
        if (success) {
          alert('Login exitoso');
        } else {
          this.loginError = 'Correo o contraseña incorrectos';
        }
      },
      error => {
        console.error(error);
        this.loginError = 'Error al conectarse con el servidor.';
      }
    );
  }
}