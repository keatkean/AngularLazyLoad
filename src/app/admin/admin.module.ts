import {DashboardComponent, RightsComponent, UserComponent} from './pages';
import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  declarations: [UserComponent, RightsComponent, DashboardComponent],
  imports: [
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }
