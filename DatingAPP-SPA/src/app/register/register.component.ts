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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register(): void {
    console.log(this.model);
    this.authService.register(this.model).subscribe(
      () => {
        console.log('Register successful');

      },
      (error) => {
        console.log(error);

      }
    );
  }

  cancel(): void {
    this.cancelRegister.emit(false);
    console.log('cancel');
  }
}
