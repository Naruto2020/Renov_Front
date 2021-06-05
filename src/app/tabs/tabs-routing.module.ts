import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'account',
        children:[
          {
            path:'',
            loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
          },
          {
            path: 'reglages',
            loadChildren: () => import('../reglages/reglages.module').then( m => m.ReglagesPageModule)
          },
          {
            path: 'add-post',
            loadChildren: () => import('../add-post/add-post.module').then( m => m.AddPostPageModule)
          },
          {
            path: 'relations',
            loadChildren: () => import('../relations/relations.module').then( m => m.RelationsPageModule)
          },
          {
            path: 'abonnes',
            loadChildren: () => import('../abonnes/abonnes.module').then( m => m.AbonnesPageModule)
          },
          {
            path: 'abonnements',
            loadChildren: () => import('../abonnements/abonnements.module').then( m => m.AbonnementsPageModule)
          },
          {
            path: 'suggestions',
            loadChildren: () => import('../suggestions/suggestions.module').then( m => m.SuggestionsPageModule)
          },
          {
            path: '',
            redirectTo: '/tabs/account',
            pathMatch: 'full'

          },
        ]
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
