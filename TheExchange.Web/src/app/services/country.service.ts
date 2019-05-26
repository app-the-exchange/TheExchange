import { CountryModel } from './../models/country.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CountryService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    getAll(): Observable<CountryModel[]> {
        return this.http.get<CountryModel[]>(environment.api + 'country');
    }
}
