import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoryModel } from 'app/models/category.model';

@Component({	
	selector: 'category-dialog',
	templateUrl: 'category-dialog.component.html'
})
export class CategoryDialogComponent {

	category: CategoryModel

	constructor(
		public dialogRef: MatDialogRef<CategoryDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { 
		this.category = data.category;
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
