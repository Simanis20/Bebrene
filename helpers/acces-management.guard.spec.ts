
import { TestBed } from '@angular/core/testing';
import { AccessManagementGuard } from './acces-management.guard';



describe('AccessManagementGuard', () => {
  let guard: AccessManagementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessManagementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});