import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms"
import { PrimaryPageComponent } from './primary-page.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    PrimaryPageComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    PrimaryPageComponent
  ],
  imports:[
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,

  ]
})
export class PagesModule { }
