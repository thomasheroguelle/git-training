import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PushComponent } from './components/push/push.component';
import { HomeComponent } from './components/home/home.component';
import { AmendComponent } from './components/amend/amend.component';
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'push', component: PushComponent },
  { path: 'amend', component: AmendComponent },
  { path: 'graph', component: GraphComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
