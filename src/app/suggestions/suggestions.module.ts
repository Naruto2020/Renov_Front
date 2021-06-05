import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { IonicModule } from '@ionic/angular';

import { SuggestionsPageRoutingModule } from './suggestions-routing.module';

import { SuggestionsPage } from './suggestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatListModule,
    SuggestionsPageRoutingModule
  ],
  declarations: [SuggestionsPage]
})
export class SuggestionsPageModule {}
