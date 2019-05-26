import { CustomerModel } from './../../models/customer.model';
import { fuseAnimations } from '@fuse/animations';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CountryModel } from 'app/models/country.model';
import { UtilHelper } from 'app/helpers/util.helper';
import { Router } from '@angular/router';
import { CountryService } from 'app/services/country.service';
import * as _ from 'lodash';
import { finalize } from 'rxjs/operators';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  animations: fuseAnimations
})
export class CustomerListComponent implements OnInit {
	isLoadingData = false;
	displayedColumns = ['picture', 'name', 'email', 'actions'];
	dataSource: MatTableDataSource<CustomerModel>;
	selection: SelectionModel<CustomerModel>;
	filterModel: string;
	filterType: string;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('filter') filter: ElementRef;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private customerService: CustomerService,
		private utilHelper: UtilHelper,
		private router: Router,
		private matDialog: MatDialog,
	) { }

	ngOnInit(): void {
		this.dataSource = new MatTableDataSource<CustomerModel>([]);
		this.dataSource.sortingDataAccessor = (item, property) => {
			switch (property) {
				// case 'tipo': return item.tipoAcesso.nome;
				// case 'tela': return item.tela.nome;
				default: return item[property];
			}
		};

		this.dataSource.filterPredicate = (data: CustomerModel, filterValue: string) => {
			const properties = [
				data.name,
				data.email
				// data.tipoAcesso.nome
			];
			return this.filterPredicate(filterValue, properties);
		};

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.selection = new SelectionModel<CustomerModel>(false, [], true);

		this.getData();
	}

	filterPredicate(filterValue: string, properties: any[]): any {
		const matchFilter = [];
		let filterArray = filterValue.split('&');

		properties = _.reject(properties, _.isNil || _.isEmpty || _.isUndefined);
		filterArray = _.reject(filterArray, _.isNil || _.isEmpty || _.isUndefined);

		filterArray.forEach(filter => {
			const customFilter = [];

			filter = this.utilHelper.stripAccents(filter).toLowerCase();

			properties.forEach(property => {
				property = this.utilHelper.stripAccents(property).toLowerCase();
				customFilter.push(_.includes(property.toString(), filter));
			});
			matchFilter.push(customFilter.some(Boolean));
		});

		return matchFilter.every(Boolean);
	}

	filterData(filter: string): void {
		this.dataSource.filter = filter;
	}

	getData(): void {
		this.isLoadingData = true;

		this.customerService.getAll()
			.pipe(finalize(() => this.isLoadingData = false))
			.subscribe((response: CustomerModel[]) => {

					this.dataSource.data = response;

			});
	}

	edit(id: string): void {
		this.router.navigate(['/customer/edit/' + id]);
	}

	new(): void {
		this.router.navigate(['/customer/new/0']);
	}

	view(id: number): void {
		this.router.navigate(['/customer/view/' + id])
	}

	delete(id: string): void {
		const dialogRef = this.matDialog.open(FuseConfirmDialogComponent);

		dialogRef.componentInstance.confirmMessage = 'Confirma a exclusão do Item de Acesso?';

		dialogRef.afterClosed()
			.subscribe((confirm: Boolean) => {

				if (!confirm) {
					return;
				}

				// this.accessControlService.deleteAccessItem(id)
				// 	.subscribe(() => {
				// 		this.getData();
				// 		this.notificationService.success('Item de Acesso excluído com sucesso');
				// 	});
			});
	}

}
