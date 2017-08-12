import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnswersComponent } from '../body/main-content/answers/all-answers/all-answers.component';
import { HomeComponent } from '../body/main-content/home/home.component'
import { AnswerComponent} from '../body/main-content/answers/answer/answer.component';
import { ProfileComponent } from '../body/main-content/profile/profile.component';
import { OtherProfileComponent } from '../body/main-content/other-profile/other-profile.component';

const routes:Routes = [
    {path:"question/:id", component: AllAnswersComponent},
    {path:"home", component: HomeComponent},
    {path:"answer/:id", component: AnswerComponent},
    {path:"profile", component: ProfileComponent},
    {path:"user/:id", component: OtherProfileComponent},
    {path:"home", component: HomeComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouterModule {

}

export const RoutingInternalComponents = [
    AllAnswersComponent, 
    HomeComponent, 
    AnswerComponent,
    ProfileComponent, 
    OtherProfileComponent
] 