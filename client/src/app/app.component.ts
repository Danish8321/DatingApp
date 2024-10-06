import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { AccountService } from './_services/account.service';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavComponent, HomeComponent, NgxSpinnerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    http = inject(HttpClient);
    private accountService = inject(AccountService);
    title = 'DatingApp';
    users: any;

    ngOnInit(): void {
        this.setCurrentUser();
    }

    setCurrentUser() {
        const userString = localStorage.getItem('user');

        if (!userString) {
            return;
        }

        const user = JSON.parse(userString);

        this, this.accountService.currentUser.set(user);
    }
}
