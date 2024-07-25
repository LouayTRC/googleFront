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
import { TaskComponent } from './Components/admin/recent-tasks/tasks/task/task.component';
import { UserWorkComponent } from './Components/user/user-work/user-work.component';
import { EventsComponent } from './Components/user/events/events.component';
import { memberGuard } from './guards/member.guard';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: 'home',title:"iset.ch google club", component:  MainComponent},


  { path:'member',title:'Member dashboard',component:UserComponent,children:[
    {path:"home",title:"Home",component:UserHomeComponent},
    {path:"works",title:"works",component:TodolistComponent},
    {path: "work/:aid",title:"work",  component: UserWorkComponent },
    {path: "events",title:"Events",  component: EventsComponent },
    {path:"",redirectTo:"home",pathMatch:'full'},
  ],canActivate:[memberGuard]},


  { path:'admin',title:'admin dashboard',component:DashboardComponent,children:[
    {path:'home',title:'home',component:DashboardHomeComponent}, 
    {path:'tasks',title:'tasks',component:AlltasksComponent}, 
    {path:'content',title:'works',component:ContentComponent}, 
    {path:'events',title:'events',component:EventsadminComponent}, 
    {path:'',redirectTo:'home',pathMatch:'full'},
  ],canActivate:[adminGuard]},
  
  { path: '',redirectTo:'/home', pathMatch:'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
