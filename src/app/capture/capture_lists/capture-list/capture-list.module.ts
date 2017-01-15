import { NgModule } from '@angular/core';
import { PrettyJsonModule, SafeJsonPipe } from 'angular2-prettyjson';
import { SortableComponent, SortableContainer } from './sortable/sortable.component';
import { JsonPipe, CommonModule } from '@angular/common';
import { CaptureListTestService } from './capture-list-test.service';
import { CaptureListService } from './capture-list.service';
import { ModalModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { CaptureListComponent } from './capture-list.component';

@NgModule({
	declarations: [
		CaptureListComponent,
		SortableComponent,
		SortableContainer
	],
	imports: [
		FormsModule,
		ModalModule.forRoot(),
		CommonModule,
		PrettyJsonModule
	],
	providers: [
		{provide: JsonPipe, useClass: SafeJsonPipe},
		CaptureListService,
		CaptureListTestService
	],
	exports: [
		CaptureListComponent
	]
})

export class CaptureListModule {
}

