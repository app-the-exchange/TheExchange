import { UtilHelper } from 'app/helpers/util.helper';
import { UserService } from './../../services/user.service';
import { UserModel } from 'app/models/user.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { finalize } from 'rxjs/operators';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	isLoadingData = false;
	displayedColumns = ['picture', 'name', 'email', 'actions'];
	dataSource: MatTableDataSource<UserModel>;
	selection: SelectionModel<UserModel>;
	filterModel: string;
	filterType: string;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('filter') filter: ElementRef;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private userService: UserService,
		private utilHelper: UtilHelper,
		private router: Router
	) { }

	ngOnInit(): void {
		this.dataSource = new MatTableDataSource<UserModel>([]);
		this.dataSource.sortingDataAccessor = (item, property) => {
			switch (property) {
				// case 'tipo': return item.tipoAcesso.nome;
				// case 'tela': return item.tela.nome;
				default: return item[property];
			}
		};

		this.dataSource.filterPredicate = (data: UserModel, filterValue: string) => {
			const properties = [
				data.name,
				data.email
				// data.tipoAcesso.nome
			];
			return this.filterPredicate(filterValue, properties);
		};

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.selection = new SelectionModel<UserModel>(false, [], true);

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

		this.dataSource.data = this.userService.getAll();

		this.isLoadingData = false

		// this.userService.getAll().
		// 	.pipe(finalize(() => this.isLoadingData = false))
		// 	.subscribe((response: UserModel[]) => {

		// 			this.dataSource.data = response;

		// 	});
	}

	edit(id: string): void {
		this.router.navigate(['/user/edit/' + id]);
	}

	new(): void {
		this.router.navigate(['/user/new/0']);
	}

	view(id: number): void {
		this.router.navigate(['/user/view/' + id])
	}

	delete(id: string): void {
		// const dialogRef = this.matDialog.open(FuseConfirmDialogComponent);

		// dialogRef.componentInstance.confirmMessage = 'Confirma a exclusão do Item de Acesso?';

		// dialogRef.afterClosed()
		// 	.subscribe((confirm: Boolean) => {

		// 		if (!confirm) {
		// 			return;
		// 		}

		// 		// this.accessControlService.deleteAccessItem(id)
		// 		// 	.subscribe(() => {
		// 		// 		this.getData();
		// 		// 		this.notificationService.success('Item de Acesso excluído com sucesso');
		// 		// 	});
		// 	});
	}

}
