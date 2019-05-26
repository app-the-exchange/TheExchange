import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryModel } from 'app/models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'app/services/country.service';
import { MatDialog } from '@angular/material';
import { catchError, finalize } from 'rxjs/operators';
import { empty } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CategoryCustomerDialogComponent } from './category-customer-dialog/category-customer-dialog.component';

@Component({
	selector: 'app-category-customer-list',
	templateUrl: './category-customer-list.component.html',
	styleUrls: ['./category-customer-list.component.scss'],
	animations: fuseAnimations
})
export class CategoryCustomerListComponent implements OnInit {
	isLoadingData = false;
	form: FormGroup;
	pageType: string;
	country: CategoryModel = new CategoryModel();
	id: number;
	category: CategoryModel[];

	constructor(
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private customerService: CustomerService,
		private dialog: MatDialog
		// private notificationService: NotificationService,
		// private brMasker: BrMaskerIonicServices3,
		// private concurrentService: ConcurrentService
	) { }

	ngOnInit(): void {
		this.pageType = this.activatedRoute.snapshot.params.type;

		if (this.pageType !== 'new') {
			// this.id = this.pageType;
			this.isLoadingData = true;

			this.id = this.activatedRoute.snapshot.params.id;

			this.customerService.getCategory(this.id)
				.pipe(
					finalize(() => this.isLoadingData = false),
					catchError((error) => {
						this.router.navigate(['/customer']);
						return empty();
					}))
				.subscribe((category) => {
					this.category = category;

					this.category.forEach(item => {
						item.disabled = true;
					});
				});
		}
	}

	isViewPage(): boolean {
		return this.pageType === 'view';
	}

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.category, event.previousIndex, event.currentIndex);
	}

	changeName(category: CategoryModel): void {
		category.disabled = false;
		category.old_name = category.name;
		category.name = '[Insira o novo Nome]';
	}

	changeBackgroundImage(category: CategoryModel) {
		const dialogRef = this.dialog.open(CategoryCustomerDialogComponent, {
			width: '300px',
			data: {category: category}
		  });
	  
		  dialogRef.afterClosed().subscribe(result => {
			category = result;
		  });
	}

	deleteCategory(category: CategoryModel) {
		this.category = this.category.filter(c => c !== category);
	}
}
