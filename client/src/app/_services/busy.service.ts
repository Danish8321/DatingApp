import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root',
})
export class BusyService {
    busyRequestCount = 0;
    private spinnerService = inject(NgxSpinnerService);

    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'timer',
            bdColor: 'rgba(255,255,255,0)',
            color: '#212529',
            size: 'default',
        });
    }

    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
}