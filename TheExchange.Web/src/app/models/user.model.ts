import { CountryModel } from 'app/models/country.model';
export class UserModel {
	name: string;
	email: string;
	iduser: number;
	picture: string;
	countriesvisited: number[];
	countryvisited: CountryModel[];
}