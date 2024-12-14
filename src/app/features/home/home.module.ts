import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainSectionComponent } from './main-section/main-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
