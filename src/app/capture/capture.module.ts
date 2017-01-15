import { NgModule } from '@angular/core';
import { CaptureListModule } from './capture_lists/capture-list/capture-list.module';
import { CaptureListDBModule } from './capture_lists/capture-list-db/capture-list-db.module';
import { CaptureComponent } from './capture.component';
import { SearchLauncherComponent } from './search-launcher/search-launcher.component';
import { SearchLauncherModule } from './search-launcher/search-launcher.module';
@NgModule({
	declarations: [
		CaptureComponent,
	],
	imports: [
		CaptureListModule,
		CaptureListDBModule,
		SearchLauncherModule
	],
	exports: [
		CaptureComponent
	]
})

export class CaptureModule {
}
