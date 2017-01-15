import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptureListComponent } from './capture-list.component';
import { CaptureListModule } from './capture-list.module';

describe('CaptureListComponent', () => {
	let component: CaptureListComponent;
	let fixture: ComponentFixture<CaptureListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				CaptureListModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CaptureListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
