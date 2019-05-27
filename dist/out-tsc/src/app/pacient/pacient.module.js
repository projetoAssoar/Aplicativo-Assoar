import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PacientPage } from './pacient.page';
var routes = [
    {
        path: '',
        component: PacientPage
    }
];
var PacientPageModule = /** @class */ (function () {
    function PacientPageModule() {
    }
    PacientPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PacientPage]
        })
    ], PacientPageModule);
    return PacientPageModule;
}());
export { PacientPageModule };
//# sourceMappingURL=pacient.module.js.map