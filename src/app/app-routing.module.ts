import { PuppyAvatarsComponent } from './puppy-avatars/puppy-avatars.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'puppies',
    component: PuppiesComponent
  },
  {
    path: 'avatars',
    component: PuppyAvatarsComponent
  },
  {
    path: '',
    redirectTo: 'puppies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
