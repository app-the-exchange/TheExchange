import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { finalize, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { CountryService } from 'app/services/country.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: fuseAnimations
})
export class UserComponent implements OnInit {
	isLoadingData = false;
	form: FormGroup;
	pageType: string;
	user: UserModel = new UserModel();
	id: number;

	constructor(
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private userService: UserService,
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

			this.countryService.getAll().subscribe(countryList => {

				this.userService.get(this.id, countryList).then(user => {
				// .pipe(
				// 	finalize(() => this.isLoadingData = false),
				// 	catchError((error) => {
				// 		this.router.navigate(['/customer']);
				// 		return empty();
				// 	}))
				// .subscribe((customer) => {
					this.isLoadingData = false;
					this.user = user;
					this.loadForm();
				});

			});


		}
	}

	loadForm(): void {
		this.form = this.formBuilder.group({
			name: [{ value: this.user.name, disabled: this.isViewPage() }, [Validators.required]],
			email: [{ value: this.user.email, disabled: this.isViewPage() }, [Validators.required]],
		});
	}

	isViewPage(): boolean {
		return this.pageType === 'view';
	}

	save(): void {
		const form = this.form.getRawValue();

		const customer: UserModel = new UserModel();

		// const country: CountryModel = <CountryModel>{
		// 	idcountry: this.id ? this.id : null,
		// 	description1: form.description1,
		// 	description2: form.description2,
		// 	short_description: form.short_description,
		// 	banner_image: form.banner_image,
		// 	flag_image: form.flag_image,
		// 	name: form.name
		// };

	}

}
