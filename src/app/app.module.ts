import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';
import { AppComponent, AppInternalComponents } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRouterModule, RoutingInternalComponents } from './routing/app-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './body/main-content/home/home.component';
import { AddQuestionComponent } from './body/main-content/home/add-question/add-question.component';
import { AnswerComponent } from './body/main-content/answers/answer/answer.component';
import { ProfileComponent } from './body/main-content/profile/profile.component';
import { UtilComponent } from '../app/app.util';
import { CommentsComponent } from './body/main-content/comments/add-comments/add-comments.component';
import { AllCommentsComponent } from './body/main-content/comments/all-comments/all-comments.component';
import { LoginComponent } from './body/main-content/login/login.component';
import { RegisterComponent } from './body/main-content/register/register.component';
import { QuestionsComponent } from './body/main-content/profile/questions/questions.component';
import { AboutComponent } from './body/main-content/profile/about/about.component';
import { SettingsComponent } from './header/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent, AppInternalComponents, RoutingInternalComponents, HomeComponent, 
    AddQuestionComponent, AnswerComponent, ProfileComponent, ProfileComponent, 
    UtilComponent, CommentsComponent, AllCommentsComponent, LoginComponent, RegisterComponent, 
    QuestionsComponent, AboutComponent, SettingsComponent
  ],
  
  imports: [
    BrowserModule, FormsModule, HttpModule, MaterialModule, AppRouterModule, 
    BrowserAnimationsModule, FlexLayoutModule, ReactiveFormsModule
  ],

  providers: [ {provide: XSRFStrategy, useFactory: xsrfFactory}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function xsrfFactory() {
    return new CookieXSRFStrategy('XSRF-TOKEN', 'XSRF-TOKEN');
}