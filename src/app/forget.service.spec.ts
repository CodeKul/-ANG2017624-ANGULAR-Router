import { TestBed, inject } from '@angular/core/testing';

import { ForgetService } from './forget.service';

describe('ForgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetService]
    });
  });

  it('should ...', inject([ForgetService], (service: ForgetService) => {
    expect(service).toBeTruthy();
  }));
});
