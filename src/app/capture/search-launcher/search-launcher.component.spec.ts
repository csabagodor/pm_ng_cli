/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchLauncherComponent } from './search-launcher.component';

describe('SearchLauncherComponent', () => {
	let component: SearchLauncherComponent;
	let fixture: ComponentFixture<SearchLauncherComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchLauncherComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchLauncherComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
