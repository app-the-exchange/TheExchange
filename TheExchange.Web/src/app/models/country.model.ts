import { CategoryModel } from './category.model';

export class CountryModel {
	idcountry: number;
	name: string;
	flag_image: string;
	description1: string;
	description2: string;
	banner_image: string;
	short_description: string;
	category: CategoryModel[];
}