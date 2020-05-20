import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from './core/material.module';
import { ProjectsComponent } from './projects/projects.component';
import { InternshipComponent } from './internship/internship.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const appRoutes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  { path: 'projects', component: ProjectsComponent, data: { title: 'Projects Component' } },
  { path: 'internship', component: InternshipComponent, data: { title: 'internship Component' } },
  { path: 'my-profile', component: MyProfileComponent, data: { title: 'My Profile Component' } }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondComponent,
    FirstComponent,
    ProjectsComponent,
    InternshipComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
