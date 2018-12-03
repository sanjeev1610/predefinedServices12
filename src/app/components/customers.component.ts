import { Component } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'customers',
    templateUrl: './customers.component.html',
})
export class CustomersComponent {
    private result: any;
    private customersSubscribe: any;
    constructor(private _service: CustomersService) { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.customersSubscribe =  this._service.getCustomers().subscribe(this._succCallBack, this._errCallBack);
    }
    public _succCallBack = (res): any => {
        this.result = res;
    }
    public _errCallBack = (err: HttpErrorResponse): any => {
        if (err.error instanceof Error) {
            console.log('Client side error');
        } else {
            console.log('Server side error');
        }
    }

}
