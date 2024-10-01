import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, TitleCasePipe],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
})
export class NavComponent {
    private router = inject(Router);
    private toastr = inject(ToastrService);
    accountService = inject(AccountService);
    model: any = {};

    login() {
        console.log(this.model);

        this.accountService.login(this.model).subscribe({
            next: (response) => {
                console.log(response);
                this.router.navigateByUrl('/members');
            },
            error: (err) => {
                this.toastr.error(err.error);
            },
        });
    }

    logout() {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    }
}
