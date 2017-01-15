import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSelectComponent } from './select.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		SelectModule,
	],
	declarations: [
		CSelectComponent
	],
	exports: [
		CSelectComponent
	]
})
export class CSelectModule {
}
