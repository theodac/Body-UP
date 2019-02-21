import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        children: [
          {
            path: '',
            loadChildren: '../accueil/accueil.module#AccueilPageModule'
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: '../profil/profil.module#ProfilPageModule'
          }
        ]
      },
      {
        path: 'list-recipe',
        children: [
          {
            path: '',
            loadChildren: '../list-recipe/list-recipe.module#ListRecipePageModule'
          }
        ]
      },


      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
