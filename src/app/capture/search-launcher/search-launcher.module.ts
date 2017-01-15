import { NgModule } from '@angular/core';
import { ComplocComponent } from './comploc/comploc.component';
import { SearchLauncherComponent } from './search-launcher.component';
import { CSelectModule } from './comploc/select/select.module';

@NgModule({
	imports: [
		CSelectModule
	],
	declarations: [
		ComplocComponent,
		SearchLauncherComponent
	],
	exports: [
		SearchLauncherComponent
	]
})
export class SearchLauncherModule {
}
