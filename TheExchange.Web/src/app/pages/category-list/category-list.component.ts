import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { CategoryModel } from './../../models/category.model';
import { fuseAnimations } from './../../../@fuse/animations/index';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryModel } from 'app/models/country.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'app/services/country.service';
import { finalize, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss'],
	animations: fuseAnimations
})
export class CategoryListComponent implements OnInit {
	isLoadingData = false;
	form: FormGroup;
	pageType: string;
	country: CountryModel = new CountryModel();
	id: number;

	constructor(
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private countryService: CountryService,
		private dialog: MatDialog
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

					this.country.category.forEach(item => {
						item.disabled = true;
					});

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

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.country.category, event.previousIndex, event.currentIndex);
	}

	changeName(category: CategoryModel): void {
		category.disabled = false;
		category.old_name = category.name;
		category.name = '[Insira o novo Nome]';
	}

	changeBackgroundImage(category: CategoryModel) {
		const dialogRef = this.dialog.open(CategoryDialogComponent, {
			width: '300px',
			data: {category: category}
		  });
	  
		  dialogRef.afterClosed().subscribe(result => {
			category = result;
		  });
	}

	deleteCategory(category: CategoryModel) {
		this.country.category = this.country.category.filter(c => c !== category);
	}
}
