import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoggedGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home2', loadChildren: './home2/home2.module#Home2PageModule', canActivate: [AuthGuard] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'pacient', loadChildren: './pacient/pacient.module#PacientPageModule' },
  { path: 'doador', loadChildren: './doador/doador.module#DoadorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
