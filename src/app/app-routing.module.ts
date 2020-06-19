import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { HomeModule } from './modules/home'

// Modules

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: (): Promise<HomeModule> =>
      import('./modules/home').then(
        (mod: { HomeModule: HomeModule }) => mod.HomeModule
      ),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
