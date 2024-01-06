import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PushComponent } from './components/push/push.component';
import { HomeComponent } from './components/home/home.component';
import { AmendComponent } from './components/amend/amend.component';
import { GraphComponent } from './components/graph/graph.component';
import { CherrypickComponent } from './components/cherrypick/cherrypick.component';
import { SquashComponent } from './components/squash/squash.component';
import { DeletecommitComponent } from './components/deletecommit/deletecommit.component';
import { RenamecommitComponent } from './components/renamecommit/renamecommit.component';
import { GeneralComponent } from './components/general/general.component';
import { StashComponent } from './components/stash/stash.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'push', component: PushComponent },
  { path: 'amend', component: AmendComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'cherrypick', component: CherrypickComponent },
  { path: 'squash', component: SquashComponent },
  { path: 'deletecommit', component: DeletecommitComponent },
  { path: 'renamecommit', component: RenamecommitComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'stash', component: StashComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
