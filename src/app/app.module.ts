import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LogComponent } from './log/log.component';
import { LogContentComponent } from './log/log-content.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { ModalModule, Ng2BootstrapModule } from 'ng2-bootstrap';
import { PopupModalComponent } from './modals/popup-modal/popup.component';
import { PopupModalService } from './modals/popup-modal/popup-modal.service';
import { CaptureModule } from './capture/capture.module';

@NgModule({
	providers: [
		PopupModalService
	],
	declarations: [
		AppComponent,
		LogComponent,
		LogContentComponent,
		PopupModalComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		HttpModule,
		CaptureModule,
		Ng2BootstrapModule,
		FormsModule,
		ModalModule.forRoot(),
		routing
	],
	bootstrap: [AppComponent]
})

export class AppModule {
}

