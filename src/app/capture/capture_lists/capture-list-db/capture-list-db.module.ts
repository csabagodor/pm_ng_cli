import { NgModule } from '@angular/core';
import { MongoodbService } from '../../../storage/mongoodb.service';
import { CommonModule } from '@angular/common';
import { CaptureListDbComponent } from './capture-list-db.component';

@NgModule({
	declarations: [
		CaptureListDbComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		MongoodbService
	],
	exports: [
		CaptureListDbComponent
	]
})

export class CaptureListDBModule {
}
