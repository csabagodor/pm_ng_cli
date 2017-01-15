import { Routes, RouterModule } from '@angular/router';
import { CaptureComponent } from './capture/capture.component';

const APP_ROUTES: Routes = [
	{path: '', component: CaptureComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
