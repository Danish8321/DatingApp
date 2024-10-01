import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    private toastr = inject(ToastrService);
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
                    this.toastr.error(err.error);
                },
            });
    }

    cancel() {
        this.cancelRegister.emit();
    }
}
