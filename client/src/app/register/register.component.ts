import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    private accountService = inject(AccountService);
    cancelRegister = output<void>();
    model: any = {};

    register() {
        this,
            this.accountService.register(this.model).subscribe({
                next: (response) => {
                    console.log(response);
                    this.cancel();
                },
                error: (err) => {
                    console.log(err);
                },
            });
    }

    cancel() {
        this.cancelRegister.emit();
    }
}