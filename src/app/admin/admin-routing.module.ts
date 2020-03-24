import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent, RightsComponent, UserComponent} from './pages';


// const routes: Routes = [
//   {  path: 'admin',
//     children : [
//       { path: 'dashboard', component: DashboardComponent},
//       { path: 'user', component: UserComponent},
//       { path: 'rights', component: RightsComponent},
//     ]
//   },
//   ];
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'user', component: UserComponent},
  { path: 'rights', component: RightsComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
