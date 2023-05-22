import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpsonsTitleComponent } from './simpsons-title/simpsons-title.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [SimpsonsTitleComponent, NavComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpsonsTitleComponent, NavComponent]
})
export class UiModule { }
