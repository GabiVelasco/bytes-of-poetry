import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularComponent } from './formular/formular.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'formular',
    component: FormularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
