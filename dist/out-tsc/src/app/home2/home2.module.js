import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home2Page } from './home2.page';
var routes = [
    {
        path: '',
        component: Home2Page
    }
];
var Home2PageModule = /** @class */ (function () {
    function Home2PageModule() {
    }
    Home2PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [Home2Page]
        })
    ], Home2PageModule);
    return Home2PageModule;
}());
export { Home2PageModule };
//# sourceMappingURL=home2.module.js.map