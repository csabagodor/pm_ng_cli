/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MongoodbService } from './mongoodb.service';

describe('MongoodbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoodbService]
    });
  });

  it('should ...', inject([MongoodbService], (service: MongoodbService) => {
    expect(service).toBeTruthy();
  }));
});
