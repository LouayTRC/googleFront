import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/main/about/about.component';
import { ContactComponent } from './Components/main/contact/contact.component';
import { DepartmentsComponent } from './Components/main/departments/departments.component';
import { FamilyComponent } from './Components/main/family/family.component';
import { FooterComponent } from './Components/main/footer/footer.component';
import { HeaderComponent } from './Components/main/header/header.component';
import { HomeComponent } from './Components/main/home/home.component';
import { MainComponent } from './Components/main/main/main.component';
import { NewsComponent } from './Components/main/news/news.component';
import { AnimationTypewriterComponent } from './Components/main/home/animation/animation-typewriter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPopupComponent } from './Components/accounts/login-popup/login-popup.component';
import { RegisterComponent } from './Components/accounts/register/register.component';
import { ApplicationComponent } from './Components/accounts/application/application.component';
import { DashboardComponent } from './Components/admin/dashboard/dashboard.component';
import { DashboardHomeComponent } from './Components/admin/dashboard/dashboard-home/dashboard-home.component';
import { RecentTasksComponent } from './Components/admin/recent-tasks/recent-tasks.component';
import { LeaderBoardComponent } from './Components/admin/leader-board/leader-board.component';
import { MemberCardComponent } from './Components/admin/members/member-card/member-card.component';
import { TaskComponent } from './Components/admin/recent-tasks/tasks/task/task.component';
import { AlltasksComponent } from './Components/admin/alltasks/alltasks.component';
import { SharedComponentLabelComponent } from './Components/admin/popups/shared-component-label/shared-component-label.component';
import { SharedComponentComponent } from './Components/admin/popups/shared-component/shared-component.component';
import { DetailsPopupComponent } from './Components/admin/popups/shared_popups/details-popup/details-popup.component';
import { AddPopupComponent } from './Components/admin/popups/shared_popups/add-popup/add-popup.component';
import { ModifyPopupComponent } from './Components/admin/popups/shared_popups/modify-popup/modify-popup.component';
import { DeletePopupComponent } from './Components/admin/popups/shared_popups/delete-popup/delete-popup.component';
import { ContentComponent } from './Components/admin/content/content.component';
import { SingleComponentComponent } from './Components/admin/content/single-component/single-component.component';
import { EventsadminComponent } from './Components/admin/events/events/eventsadmin.component';
import { UserComponent } from './Components/user/user/user.component';
import { UserFooterComponent } from './Components/user/user-footer/user-footer.component';
import { UserHeaderComponent } from './Components/user/user-header/user-header.component';
import { ProfileComponent } from './Components/user/profile/profile.component';
import { UserHomeComponent } from './Components/user/user-home/user-home.component';
import { PointsPopupComponent } from './Components/user/user-home/points/points-popup/points-popup.component';
import { TodolistComponent } from './Components/user/todolist/todolist.component';
import { SingleTaskComponent } from './Components/user/todolist/single-task/single-task.component';
import { UserWorkComponent } from './Components/user/user-work/user-work.component';
import { EventsComponent } from './Components/user/events/events.component';
import { SignoutPopupComponent } from './Components/admin/popups/pop_ups/signout-popup/signout-popup.component';
import { PresenceComponent } from './Components/admin/popups/pop_ups/presence/presence.component';
import { FileSizePipePipe } from './pipes/file-size-pipe.pipe';
import { PasswordPopupComponent } from './Components/admin/popups/pop_ups/password-popup/password-popup.component';
import { AddAdminComponent } from './Components/admin/add-admin/add-admin.component';
import { ScorecardsComponent } from './Components/admin/scorecards/scorecards.component';
import { ScorecardPopupComponent } from './Components/admin/popups/pop_ups/scorecard-popup/scorecard-popup.component';
import { environment } from 'src/environment';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { SettingsComponent } from './Components/user/settings/settings.component';
import { LeaderboardComponent } from './Components/user/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPopupComponent,
    RegisterComponent,
    ApplicationComponent,
    AboutComponent,
    ContactComponent,
    DepartmentsComponent,
    FamilyComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AnimationTypewriterComponent,
    MainComponent,
    NewsComponent,
    DashboardComponent,
    DashboardHomeComponent,
    RecentTasksComponent,
    LeaderBoardComponent,
    MemberCardComponent,
    TaskComponent,
    AlltasksComponent,
    SharedComponentLabelComponent,
    SharedComponentComponent,
    DetailsPopupComponent,
    AddPopupComponent,
    ModifyPopupComponent,
    DeletePopupComponent,
    ContentComponent,
    SingleComponentComponent,
    EventsadminComponent,
    UserComponent,
    UserFooterComponent,
    UserHeaderComponent,
    ProfileComponent,
    UserHomeComponent,
    PointsPopupComponent,
    TodolistComponent,
    SingleTaskComponent,
    UserWorkComponent,
    EventsComponent,
    SignoutPopupComponent,
    PresenceComponent,
    FileSizePipePipe,
    SharedComponentLabelComponent,
    SharedComponentComponent,
    PasswordPopupComponent,
    AddAdminComponent,
    ScorecardsComponent,
    ScorecardPopupComponent,
    PasswordPopupComponent,
    SettingsComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
