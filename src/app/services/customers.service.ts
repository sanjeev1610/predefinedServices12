import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class CustomersService {
    constructor(private _http: HttpClient) {}
    public getCustomers(): any {
        return this._http.get('https://www.w3schools.com/angular/customers.php');
    }
}
