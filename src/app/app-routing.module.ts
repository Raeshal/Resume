import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { LandingComponent } from './landing/landing.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ConnectComponent } from './connect/connect.component';


const routes: Routes = [
 
  {
    path : '',
    component: LandingComponent
  },
  {
    path : 'about',
    component: AboutComponent

  },
  {
    path : 'experience',
    component: ExperienceComponent

  },
  {
    path : 'education',
    component : EducationComponent

  },
  {
    path : 'projects',
    component : ProjectsComponent

  },
  {
    path : 'expertise',
    component : ExpertiseComponent

  },
  {
    path : 'connect',
    component : ConnectComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent ,ConnectComponent, ExperienceComponent,EducationComponent , ProjectsComponent , ExpertiseComponent ]