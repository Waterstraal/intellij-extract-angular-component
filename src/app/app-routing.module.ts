import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeComponent } from './awesome/awesome.component';

const routes: Routes = [{
  path: '',
  component: AwesomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
