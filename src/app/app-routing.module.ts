import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [

  // Homepage
  {
    // site.com/homepage
    path: 'homepage',
    component: HomepageComponent
  },

  // Contact
  {
    // site./contact
    path: 'contact',
    component: ContactComponent
  },

  // About
  {
    // site.com/about
    path: 'about',
    component: AboutComponent
  },

  // Default Route
  {
    path: '',  
    pathMatch: 'full',
    redirectTo: '/homepage'
    // redirige vers site.com/homepage
  },

  // wildcard route / not found /404
  {
    path: '**',
    // component: NotFoundComponent
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
