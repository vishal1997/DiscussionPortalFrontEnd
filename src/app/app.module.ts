import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent, AppInternalComponents } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { AppRouterModule, RoutingInternalComponents } from './routing/app-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './body/main-content/home/home.component';
import { AddQuestionComponent } from './body/main-content/home/add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent, AppInternalComponents, RoutingInternalComponents, HomeComponent, AddQuestionComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, MaterialModule, AppRouterModule, BrowserAnimationsModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
