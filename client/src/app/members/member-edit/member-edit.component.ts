import { Component, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';
import { Member } from '../../_models/member';
import { AccountService } from '../../_services/account.service';
import { MembersService } from '../../_services/members.service';

@Component({
    selector: 'app-member-edit',
    standalone: true,
    imports: [FormsModule, TabsModule],
    templateUrl: './member-edit.component.html',
    styleUrl: './member-edit.component.css',
})
export class MemberEditComponent implements OnInit {
    member?: Member;
    private accoutService = inject(AccountService);
    private memberService = inject(MembersService);
    private toastr = inject(ToastrService);
    @ViewChild('editForm') editForm?: NgForm;
    @HostListener('window:beforeunload', ['$event']) notify($event: any) {
        if (this.editForm?.dirty) {
            $event.returnValue = true;
        }
    }

    ngOnInit(): void {
        this.loadMember();
    }

    loadMember() {
        const user = this.accoutService.currentUser();

        if (!user) {
            return;
        }

        this.memberService.getMember(user.username).subscribe({
            next: (member) => (this.member = member),
        });
    }

    updateMember() {
        this.memberService.updateMember(this.editForm?.value).subscribe({
            next: () => {
                this.toastr.success('Profile updated successfully');
                this.editForm?.reset(this.member);
            },
        });
    }
}
