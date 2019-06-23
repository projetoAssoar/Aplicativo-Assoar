import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home-paulo', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoggedGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  { path: 'home2', loadChildren: './home2/home2.module#Home2PageModule', canActivate: [AuthGuard] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate: [AuthGuard] },
  { path: 'register2', loadChildren: './register2/register2.module#Register2PageModule', canActivate: [AuthGuard] },
  { path: 'register3', loadChildren: './register3/register3.module#Register3PageModule', canActivate: [AuthGuard] },
  { path: 'home-paulo', loadChildren: './home-paulo/home-paulo.module#HomePauloPageModule' },
  { path: 'home-paciente', loadChildren: './home-paciente/home-paciente.module#HomePacientePageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
