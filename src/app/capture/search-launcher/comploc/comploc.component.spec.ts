/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplocComponent } from './comploc.component';

describe('ComplocComponent', () => {
	let component: ComplocComponent;
	let fixture: ComponentFixture<ComplocComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ComplocComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ComplocComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
