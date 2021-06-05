import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { IonicModule } from '@ionic/angular';

import { AbonnementsPageRoutingModule } from './abonnements-routing.module';

import { AbonnementsPage } from './abonnements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatListModule,
    AbonnementsPageRoutingModule
  ],
  declarations: [AbonnementsPage]
})
export class AbonnementsPageModule {}
