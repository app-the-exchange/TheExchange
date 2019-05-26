import { CategoryModel } from './../models/category.model';
import { CustomerModel } from './../models/customer.model';
import { CountryModel } from './../models/country.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CustomerService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    getAll(): Observable<CustomerModel[]> {
        return this.http.get<CustomerModel[]>(environment.api + 'customers');
	}
	
	get(idcustomer: number): Observable<CustomerModel> {
		return this.http.get<CustomerModel>(`${environment.api}customer/${idcustomer}`);
	}

	post(customer: CustomerModel): Observable<boolean> {
		return this.http.post<boolean>(environment.api + 'customer', customer);
	}

	put(customer: CustomerModel): Observable<boolean> {
		return this.http.put<boolean>(environment.api + 'customer', customer);
	}

	getCategory(idcustomer: number): Observable<CategoryModel[]> {
		return this.http.get<CategoryModel[]>(environment.api + 'categorycustomer/' + idcustomer);
	}
}
