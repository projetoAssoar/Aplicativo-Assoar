import { TestBed, inject } from '@angular/core/testing';
import { LoggedGuard } from './logged.guard';
describe('LoggedGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [LoggedGuard]
        });
    });
    it('should ...', inject([LoggedGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=logged.guard.spec.js.map