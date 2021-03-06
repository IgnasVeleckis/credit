import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { OrderComponent } from './containers/order/order.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StepFourComponent } from './components/step-four/step-four.component';



@NgModule({
  declarations: [StepOneComponent, StepTwoComponent, StepThreeComponent, OrderComponent, StepFourComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
