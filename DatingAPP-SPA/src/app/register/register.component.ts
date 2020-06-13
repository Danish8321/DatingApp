import { AlertifyService } from './../services/alertify.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

  register(): void {
    console.log(this.model);
    this.authService.register(this.model).subscribe(
      () => {
        this.alertify.success('Register successful');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  cancel(): void {
    this.cancelRegister.emit(false);
    this.alertify.message('cancel');
  }
}
