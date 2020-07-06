import { NgModule } from '@angular/core';
import { PrimaryPageComponent } from './primary-page.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    PrimaryPageComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    PrimaryPageComponent
  ],
  imports:[
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
