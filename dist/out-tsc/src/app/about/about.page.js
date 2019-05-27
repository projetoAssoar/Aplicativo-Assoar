import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AboutPage = /** @class */ (function () {
    function AboutPage(router) {
        this.router = router;
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.souPaciente = function () {
        this.router.navigate(['pacient']);
    };
    AboutPage.prototype.souDoador = function () {
        this.router.navigate(['doador']);
    };
    AboutPage = tslib_1.__decorate([
        Component({
            selector: 'app-about',
            templateUrl: './about.page.html',
            styleUrls: ['./about.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.page.js.map