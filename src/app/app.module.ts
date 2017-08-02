import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';
import { AppComponent, AppInternalComponents } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { AppRouterModule, RoutingInternalComponents } from './routing/app-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './body/main-content/home/home.component';
import { AddQuestionComponent } from './body/main-content/home/add-question/add-question.component';
import { AnswerComponent } from './body/main-content/answers/answer/answer.component';
import { ProfileComponent } from './body/main-content/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent, AppInternalComponents, RoutingInternalComponents, HomeComponent, AddQuestionComponent, 
    AnswerComponent, ProfileComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, MaterialModule, AppRouterModule, BrowserAnimationsModule, FlexLayoutModule
  ],
  providers: [ {provide: XSRFStrategy, useFactory: xsrfFactory}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function xsrfFactory() {
    return new CookieXSRFStrategy('XSRF-TOKEN', 'XSRF-TOKEN');
}