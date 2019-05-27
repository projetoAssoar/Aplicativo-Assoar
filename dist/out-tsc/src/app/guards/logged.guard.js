import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
var LoggedGuard = /** @class */ (function () {
    function LoggedGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getAuth().onAuthStateChanged(function (user) {
                if (user)
                    _this.router.navigate(['home2']);
                resolve(!user ? true : false);
            });
        });
    };
    LoggedGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router])
    ], LoggedGuard);
    return LoggedGuard;
}());
export { LoggedGuard };
//# sourceMappingURL=logged.guard.js.map