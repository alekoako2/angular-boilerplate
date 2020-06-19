import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './pages/home/home.component'
import { HmAutocompleteOverviewModule } from '@shared/components/hm-autocomplete-overview/hm-autocomplete-overview.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HmAutocompleteOverviewModule],
})
export class HomeModule {}
