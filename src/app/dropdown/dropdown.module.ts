import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    SelectDropDownModule
  ],
  exports: [
    DemoComponent
  ]
})
export class DropdownModule { }
