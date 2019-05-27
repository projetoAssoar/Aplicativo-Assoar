import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DoadorPage } from './doador.page';
var routes = [
    {
        path: '',
        component: DoadorPage
    }
];
var DoadorPageModule = /** @class */ (function () {
    function DoadorPageModule() {
    }
    DoadorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DoadorPage]
        })
    ], DoadorPageModule);
    return DoadorPageModule;
}());
export { DoadorPageModule };
//# sourceMappingURL=doador.module.js.map