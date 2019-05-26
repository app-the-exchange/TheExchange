import { CategoryModel } from '../models/category.model';
import { CustomerModel } from '../models/customer.model';
import { CountryModel } from '../models/country.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { UserModel } from 'app/models/user.model';

const list = <UserModel[]> [
	{
		iduser: 1,
		name: 'Jonatas Aguiar',
		picture: 'https://randomuser.me/api/portraits/men/50.jpg',
		countriesvisited: [1, 2, 3, 4],
		email: 'jonatas@gmail.com'
	},
	{
		iduser: 2,
		name: 'Victor Oliveira',
		picture: 'https://randomuser.me/api/portraits/men/51.jpg',
		countriesvisited: [1, 2, 3, 4],
		email: 'victor@gmail.com'
	},
	{
		iduser: 3,
		name: 'Marelo Querino',
		picture: 'https://randomuser.me/api/portraits/men/52.jpg',
		countriesvisited: [1],
		email: 'marcelo@gmail.com'
	}, {
		iduser: 4,
		name: 'João pedro',
		picture: 'https://randomuser.me/api/portraits/men/53.jpg',
		countriesvisited: [1, 2],
		email: 'joao@gmail.com'
	}
]

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }
	
	getAll(): UserModel[] {
		return list;
	}

	get(iduser: number, countryList: CountryModel[]): Promise<UserModel> {
		return new Promise((resolve, reject) => {

			const user = list.find(u => u.iduser.toString() === iduser.toString());

			user.countryvisited = [];

			user.countriesvisited.forEach(c => {
				user.countryvisited.push(countryList.find(country => country.idcountry === c));
			});

			resolve(user);
		});
	}

}
