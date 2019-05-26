import { CategoryModel } from 'app/models/category.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({	
	selector: 'category-customer-dialog',
	templateUrl: 'category-customer-dialog.component.html',
	animations: fuseAnimations
})
export class CategoryCustomerDialogComponent {

	category: CategoryModel

	constructor(
		public dialogRef: MatDialogRef<CategoryCustomerDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { 
		this.category = data.category;
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
