import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { IonicModule } from '@ionic/angular';

import { RelationsPageRoutingModule } from './relations-routing.module';

import { RelationsPage } from './relations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatListModule,
    RelationsPageRoutingModule
  ],
  declarations: [RelationsPage]
})
export class RelationsPageModule {}
