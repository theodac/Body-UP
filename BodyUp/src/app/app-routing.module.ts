import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'entrainement', loadChildren: './entrainement/entrainement.module#EntrainementPageModule' },
  { path: 'menus', loadChildren: './menus/menus.module#MenusPageModule' },
  { path: 'social', loadChildren: './social/social.module#SocialPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
