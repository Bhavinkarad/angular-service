import { TestBed, inject } from '@angular/core/testing';

import { FristListviewService } from './frist-listview.service';

describe('FristListviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FristListviewService]
    });
  });

  it('should be created', inject([FristListviewService], (service: FristListviewService) => {
    expect(service).toBeTruthy();
  }));
});
