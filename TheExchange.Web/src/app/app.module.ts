import { CategoryCustomerDialogComponent } from './pages/category-customer-list/category-customer-dialog/category-customer-dialog.component';
import { CategoryDialogComponent } from './pages/category-list/category-dialog/category-dialog.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { CountryListComponent } from './pages/country-list/country-list.component';

import * as mat from '@angular/material';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { CountryComponent } from './pages/country/country.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CategoryComponent } from './pages/category/category.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CategoryCustomerListComponent } from './pages/category-customer-list/category-customer-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserComponent } from './pages/user/user.component';


const appRoutes: Routes = [
	{
		path: 'country',
		component: CountryListComponent
	},
	{
		path: 'country/:type/:id',
		component: CountryComponent
	},
	{
		path: 'country/:type/:id/category',
		component: CategoryListComponent
	},
	{
		path: 'customer',
		component: CustomerListComponent
	},
	{
		path: 'customer/:type/:id',
		component: CustomerComponent
	},
	{
		path: 'customer/:type/:id/category',
		component: CategoryCustomerListComponent
	},
	{
		path: 'user',
		component: UserListComponent
	},
	{
		path: 'user/:type/:id',
		component: UserComponent
	},
	{
		path: '**',
		redirectTo: 'sample'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		CountryListComponent,
		CountryComponent,
		CategoryListComponent,
		CategoryDialogComponent,
		CategoryComponent,
		CustomerListComponent,
		CustomerComponent,
		CategoryCustomerListComponent,
		CategoryCustomerDialogComponent,
		UserListComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes),

		TranslateModule.forRoot(),

		// Material moment date module
		MatMomentDateModule,

		// Material
		MatButtonModule,
		MatIconModule,

		// Fuse modules
		FuseModule.forRoot(fuseConfig),
		FuseProgressBarModule,
		FuseSharedModule,
		FuseSidebarModule,
		FuseThemeOptionsModule,

		// App modules
		LayoutModule,
		SampleModule,

		// Material
		mat.MatButtonModule,
		mat.MatIconModule,
		mat.MatFormFieldModule,
		mat.MatCheckboxModule,
		mat.MatInputModule,
		mat.MatSnackBarModule,
		mat.MatTableModule,
		mat.MatMenuModule,
		mat.MatPaginatorModule,
		mat.MatProgressSpinnerModule,
		mat.MatTooltipModule,
		mat.MatDialogModule,
		mat.MatToolbarModule,
		mat.MatButtonToggleModule,
		mat.MatAutocompleteModule,
		mat.MatSelectModule,
		mat.MatSlideToggleModule,
		mat.MatListModule,
		
		DragDropModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
		// { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
	],
	bootstrap: [
		AppComponent
	],
	entryComponents: [
		CategoryDialogComponent,
		CategoryCustomerDialogComponent
	]
})
export class AppModule {
}
