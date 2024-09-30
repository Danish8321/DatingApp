import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [FormsModule, BsDropdownModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
})
export class NavComponent {
    accountService = inject(AccountService);
    model: any = {};

    login() {
        console.log(this.model);

        this.accountService.login(this.model).subscribe({
            next: (response) => {
                console.log(response);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    logout() {
        this.accountService.logout();
    }
}