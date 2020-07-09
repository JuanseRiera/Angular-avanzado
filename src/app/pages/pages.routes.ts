import { Routes, RouterModule } from '@angular/router';
import { PrimaryPageComponent } from './primary-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: "",
    component: PrimaryPageComponent,
    children:[
      { path: "dashboard", component: DashboardComponent },
      { path: "account-settings", component: AccountSettingsComponent },
      { path: "progress", component: ProgressComponent },
      { path: "graficas", component: GraficasComponent },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    ]

  }
]

export const PAGES_ROUTES = RouterModule.forChild(routes);