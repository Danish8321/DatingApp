import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { UserParams } from '../../_models/userParams';
import { AccountService } from '../../_services/account.service';
import { MembersService } from '../../_services/members.service';
import { MemberCardComponent } from '../member-card/member-card.component';

@Component({
    selector: 'app-member-list',
    standalone: true,
    templateUrl: './member-list.component.html',
    styleUrl: './member-list.component.css',
    imports: [MemberCardComponent, PaginationModule, FormsModule, ButtonsModule],
})
export class MemberListComponent implements OnInit {
    accountService = inject(AccountService);
    memberService = inject(MembersService);
    pageNumber = 1;
    pageSize = 5;
    genderList = [
        { value: 'male', display: 'Males' },
        { value: 'female', display: 'Females' },
    ];
    userParams = new UserParams(this.accountService.currentUser());

    ngOnInit(): void {
        console.log(this.memberService.paginatedResult());

        if (!this.memberService.paginatedResult()) {
            this.loadMembers();
        }
    }

    loadMembers() {
        this.memberService.getMembers();
    }

    resetFilters() {
        this.memberService.resetUserParams();
        this.loadMembers();
    }

    pageChanged(event: any) {
        if (this.memberService.userParams().pageNumber != event.page) {
            this.memberService.userParams().pageNumber = event.page;
            this.loadMembers();
        }
    }
}
