import { TestBed } from '@angular/core/testing';

import { SaveToDoListService } from './save-to-do-list.service';

describe('SaveToDoListService', () => {
  let service: SaveToDoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveToDoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
