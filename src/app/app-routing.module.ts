import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import  {AuthGuard} from '@angular/fire/auth-guard';
import {redirectUnauthorizedTo} from'@angular/fire/auth-guard';
import {NewsService} from './services/news.service';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin
    }
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),

  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule),

  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'new-tweet',
    loadChildren: () => import('./new-tweet/new-tweet.module').then( m => m.NewTweetPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
