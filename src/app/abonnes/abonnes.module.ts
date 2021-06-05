import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { IonicModule } from '@ionic/angular';

import { AbonnesPageRoutingModule } from './abonnes-routing.module';

import { AbonnesPage } from './abonnes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatListModule,
    AbonnesPageRoutingModule
  ],
  declarations: [AbonnesPage]
})
export class AbonnesPageModule {}
