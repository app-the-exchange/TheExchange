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
import { CountryComponent } from './pages/country/country.component';

import * as mat from '@angular/material';
import { UrlInterceptor } from './interceptors/url.interceptor';

const appRoutes: Routes = [
	{
		path: 'country',
		component: CountryComponent
	},
	{
		path: '**',
		redirectTo: 'sample'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		CountryComponent
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
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
		// { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
