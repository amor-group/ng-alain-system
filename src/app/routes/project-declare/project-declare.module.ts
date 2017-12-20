import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDeclareRoutingModule } from './project-declare-routing.module';
import { DeclarelistComponent } from './declarelist/declarelist.component';

const routes: Routes = [
    {path: 'declare', component: DeclarelistComponent}
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
    ProjectDeclareRoutingModule
  ],
  declarations: [DeclarelistComponent]
})
export class ProjectDeclareModule { }
