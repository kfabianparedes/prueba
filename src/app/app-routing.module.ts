import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ViejoComponent } from './viejo/viejo.component';

const routes: Routes = [
  {path:'nuevo', component: NuevoComponent},

  {
    path:'viejo', 
    component: ViejoComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
