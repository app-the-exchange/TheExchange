import { CustomerModel } from './../../models/customer.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
	isLoadingData = false;
	form: FormGroup;
	pageType: string;
	customer: CustomerModel = new CustomerModel();
	id: number;

	constructor(
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private customerService: CustomerService
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

			this.customerService.get(this.id)
				.pipe(
					finalize(() => this.isLoadingData = false),
					catchError((error) => {
						this.router.navigate(['/customer']);
						return empty();
					}))
				.subscribe((customer) => {
					this.customer = customer;
					this.loadForm();
				});
		}
	}

	loadForm(): void {
		this.form = this.formBuilder.group({
			name: [{ value: this.customer.name, disabled: this.isViewPage() }, [Validators.required]],
			email: [{ value: this.customer.email, disabled: this.isViewPage() }, [Validators.required]],
			course: [{ value: this.customer.course, disabled: this.isViewPage() }, [Validators.required]],
			code: [{ value: this.customer.code, disabled: this.isViewPage() }, [Validators.required]],
		});
	}

	isViewPage(): boolean {
		return this.pageType === 'view';
	}

	save(): void {
		const form = this.form.getRawValue();

		const customer: CustomerModel = new CustomerModel();

		// const country: CountryModel = <CountryModel>{
		// 	idcountry: this.id ? this.id : null,
		// 	description1: form.description1,
		// 	description2: form.description2,
		// 	short_description: form.short_description,
		// 	banner_image: form.banner_image,
		// 	flag_image: form.flag_image,
		// 	name: form.name
		// };

		if (this.pageType === 'new') {
			this.customerService.post(customer)
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
			this.customerService.put(customer)
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
		this.router.navigate(['/customer/' + this.pageType + '/' + this.id + '/category']);
	}
}
