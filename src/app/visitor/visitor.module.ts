import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

import { IonicModule } from '@ionic/angular';

import { VisitorPageRoutingModule } from './visitor-routing.module';

import { VisitorPage } from './visitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    VisitorPageRoutingModule
  ],
  declarations: [VisitorPage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA ]
})
export class VisitorPageModule {}
