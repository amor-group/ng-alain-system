import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AcceptlistComponent } from './acceptlist/acceptlist.component';

const routes: Routes = [
    {path: '', component: AcceptlistComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcceptlistComponent],
    /*必须exports出RouterModule才能在routes.ts里链接到该文件的component*/
    exports: [
        RouterModule
    ]
})
export class ProjectAcceptModule { }
