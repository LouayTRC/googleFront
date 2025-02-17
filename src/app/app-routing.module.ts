import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main/main.component';
import { DashboardComponent } from './Components/admin/dashboard/dashboard.component';
import { DashboardHomeComponent } from './Components/admin/dashboard/dashboard-home/dashboard-home.component';
import { AlltasksComponent } from './Components/admin/alltasks/alltasks.component';
import { ContentComponent } from './Components/admin/content/content.component';
import { EventsadminComponent } from './Components/admin/events/events/eventsadmin.component';
import { UserComponent } from './Components/user/user/user.component';
import { UserHomeComponent } from './Components/user/user-home/user-home.component';
import { TodolistComponent } from './Components/user/todolist/todolist.component';
import { UserWorkComponent } from './Components/user/user-work/user-work.component';
import { EventsComponent } from './Components/user/events/events.component';
import { memberGuard } from './guards/member.guard';
import { adminGuard } from './guards/admin.guard';
import { ScorecardsComponent } from './Components/admin/scorecards/scorecards.component';
import { SettingsComponent } from './Components/user/settings/settings.component';
import { LeaderBoardComponent } from './Components/admin/leader-board/leader-board.component';
import { LeaderboardComponent } from './Components/user/leaderboard/leaderboard.component';
import { ApplicationsAdminComponent } from './Components/admin/applications-admin/applications-admin.component';
import { Application } from './models/application';
import { ApplicationComponent } from './Components/accounts/application/application.component';

const routes: Routes = [
  { path: 'home',title:"iset.ch google club", component:  MainComponent},
  { path: 'apply',title:"Apply To Join", component:  ApplicationComponent},


  { path:'member',title:'Member dashboard',component:UserComponent,children:[
    {path:"home",title:"Home",component:UserHomeComponent},
    {path:"leaderboard",title:"leaderboard",component:LeaderboardComponent},
    {path:"works",title:"works",component:TodolistComponent},
    {path: "work/:aid",title:"work",  component: UserWorkComponent },
    {path: "events",title:"Events",  component: EventsComponent },
    {path: "settings",title:"settings",  component: SettingsComponent },
    {path:"",redirectTo:"home",pathMatch:'full'},
  ],canActivate:[memberGuard]},


  { path:'admin',title:'admin dashboard',component:DashboardComponent,children:[
    {path:'home',title:'home',component:DashboardHomeComponent}, 
    {path:'tasks',title:'tasks',component:AlltasksComponent}, 
    {path:'content',title:'works',component:ContentComponent}, 
    {path:'applications',title:'applications',component:ApplicationsAdminComponent}, 
    {path:'events',title:'events',component:EventsadminComponent}, 
    {path:'scorecards',title:'scoreCards',component:ScorecardsComponent}, 
    {path:'',redirectTo:'home',pathMatch:'full'},
  ],canActivate:[adminGuard]},
  
  { path: '',redirectTo:'/home', pathMatch:'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
