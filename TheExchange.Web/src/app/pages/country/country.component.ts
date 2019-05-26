import { CountryService } from './../../services/country.service';
import { CountryModel } from './../../models/country.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { catchError, finalize } from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
	selector: 'app-country',
	templateUrl: './country.component.html',
	styleUrls: ['./country.component.scss'],
	animations: fuseAnimations
})
export class CountryComponent implements OnInit {
	isLoadingData = false;
	form: FormGroup;
	pageType: string;
	country: CountryModel = new CountryModel();
	id: number;

	constructor(
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private countryService: CountryService
		// private notificationService: NotificationService,
		// private brMasker: BrMaskerIonicServices3,
		// private concurrentService: ConcurrentService
	) { }

	ngOnInit(): void {
		this.pageType = this.activatedRoute.snapshot.params.type;

		this.loadForm();

		if (this.pageType !== 'new') {
			// this.id = this.pageType;
			this.isLoadingData = true;

			this.id = this.activatedRoute.snapshot.params.id;

			this.countryService.get(this.id)
				.pipe(
					finalize(() => this.isLoadingData = false),
					catchError((error) => {
						this.router.navigate(['/country']);
						return empty();
					}))
				.subscribe((country) => {
					this.country = country;
					this.loadForm();
				});
		}
	}

	loadForm(): void {
		this.form = this.formBuilder.group({
			name: [{ value: this.country.name, disabled: this.isViewPage() }, [Validators.required]],
			description1: [{ value: this.country.description1, disabled: this.isViewPage() }, []],
			description2: [{ value: this.country.description2, disabled: this.isViewPage() }],
			short_description: [{ value: this.country.short_description, disabled: this.isViewPage() }, [Validators.required]],
			banner_image: [{ value: this.country.banner_image, disabled: this.isViewPage() }, [Validators.required]],
			flag_image: [{ value: this.country.flag_image, disabled: this.isViewPage() }, [Validators.required]]
		});
	}

	isViewPage(): boolean {
		return this.pageType === 'view';
	}

	save(): void {
		const form = this.form.getRawValue();

		const country: CountryModel = <CountryModel>{
			idcountry: this.id ? this.id : null,
			description1: form.description1,
			description2: form.description2,
			short_description: form.short_description,
			banner_image: form.banner_image,
			flag_image: form.flag_image,
			name: form.name
		};

		if (this.pageType === 'new') {
			this.countryService.post(country)
				.subscribe((response) => {

					if (response) {
						// this.notificationService.success('Concorrente cadastrado com sucesso');
						this.router.navigate(['/country']);
					}
					else {
						// TODO - ERRO
					}

				});
		}
		else {
			this.countryService.put(country)
				.subscribe((response) => {

					if (response) {
						// this.notificationService.success('Concorrente atualizado com sucesso');
						this.router.navigate(['/country']);
					}
					else {
						// TODO - ERRO
					}

				});
		}
	}

	openCategory() {
		this.router.navigate(['/country/' + this.pageType + '/' + this.id + '/category']);
	}
}
