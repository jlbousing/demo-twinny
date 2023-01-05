import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ResetComponent } from './pages/reset/reset.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
      path: 'register',
      component: SignupComponent
    },
    {
      path: 'forgot',
      component: ForgotComponent
    },
    {
      path: 'reset',
      component: ResetComponent
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }