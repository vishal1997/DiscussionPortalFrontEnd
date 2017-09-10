import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnswersComponent } from '../body/main-content/answers/all-answers/all-answers.component';
import { HomeComponent } from '../body/main-content/home/home.component'
import { AnswerComponent} from '../body/main-content/answers/answer/answer.component';
import { ProfileComponent } from '../body/main-content/profile/profile.component';
import { OtherProfileComponent } from '../body/main-content/other-profile/other-profile.component';
import { CommentsComponent } from '../body/main-content/comments/add-comments/add-comments.component';
import { AllCommentsComponent } from '../body/main-content/comments/all-comments/all-comments.component';
import { LoginComponent } from '../body/main-content/login/login.component';
import { RegisterComponent } from '../body/main-content/register/register.component';
import { AuthGuard } from '../auth/AuthGuard';
import { QuestionsComponent } from '../body/main-content/profile/questions/questions.component';
import { AboutComponent } from '../body/main-content/profile/about/about.component';
import { SettingsComponent } from '../header/settings/settings.component';
const routes:Routes = [
    {path:"question/:id", component: AllAnswersComponent, canActivate: [AuthGuard] },
    {path:"home", component: HomeComponent, canActivate: [AuthGuard] },
    {path:"answer/:id", component: AnswerComponent, canActivate: [AuthGuard] },
    {path:"profile", component: ProfileComponent, canActivate: [AuthGuard] },
    {path:"user/:id", component: OtherProfileComponent, canActivate: [AuthGuard] },
    {path:"home", component: HomeComponent, canActivate: [AuthGuard] },
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
    {path:"settings", component:SettingsComponent, canActivate:[AuthGuard]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRouterModule {

}

export const RoutingInternalComponents = [
    AllAnswersComponent, 
    HomeComponent, 
    AnswerComponent,
    ProfileComponent, 
    OtherProfileComponent,
    LoginComponent,
    QuestionsComponent
] 