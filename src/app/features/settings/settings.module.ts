import { SharedModule as pdlSharedModule } from './../../../../projects/my-lib/src/lib/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsContainerComponent } from './settings/settings-container.component';


// import { SharedModule as polSharedModule } from 'pdl';


@NgModule({
  declarations: [SettingsContainerComponent],
  imports: [
    CommonModule, 
    SettingsRoutingModule,
    CoreModule,
    pdlSharedModule
  ]
})
export class SettingsModule {}
