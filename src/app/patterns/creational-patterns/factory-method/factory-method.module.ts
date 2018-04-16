import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryMethodComponent } from './factory-method.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FactoryMethodComponent],
  declarations: [FactoryMethodComponent]
})
export class FactoryMethodModule { }
