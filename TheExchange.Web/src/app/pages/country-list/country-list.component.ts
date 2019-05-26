import { UtilHelper } from '../../helpers/util.helper';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CountryService } from 'app/services/country.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CountryModel } from 'app/models/country.model';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  animations: fuseAnimations
})
export class CountryListComponent implements OnInit {
	isLoadingData = false;
	displayedColumns = ['flag_image', 'name', 'actions'];
	dataSource: MatTableDataSource<CountryModel>;
	selection: SelectionModel<CountryModel>;
	filterModel: string;
	filterType: string;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('filter') filter: ElementRef;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private countryService: CountryService,
		private utilHelper: UtilHelper,
		private router: Router,
		private matDialog: MatDialog
	) { }

	ngOnInit(): void {
		this.dataSource = new MatTableDataSource<CountryModel>([]);
		this.dataSource.sortingDataAccessor = (item, property) => {
			switch (property) {
				// case 'tipo': return item.tipoAcesso.nome;
				// case 'tela': return item.tela.nome;
				default: return item[property];
			}
		};

		this.dataSource.filterPredicate = (data: CountryModel, filterValue: string) => {
			const properties = [
				data.name
				// data.tipoAcesso.nome
			];
			return this.filterPredicate(filterValue, properties);
		};

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.selection = new SelectionModel<CountryModel>(false, [], true);

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

		this.countryService.getAll()
			.pipe(finalize(() => this.isLoadingData = false))
			.subscribe((response: CountryModel[]) => {

					this.dataSource.data = response;

			});
	}

	edit(id: string): void {
		this.router.navigate(['/country/edit/' + id]);
	}

	new(): void {
		this.router.navigate(['/country/new/0']);
	}

	view(id: number): void {
		this.router.navigate(['/country/view/' + id])
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
