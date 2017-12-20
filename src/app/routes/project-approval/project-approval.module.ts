import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { ApprovallistComponent } from './approvallist/approvallist.component';

const routes: Routes = [
    {path: '', component: ApprovallistComponent}/*path为空可在routes.ts里直接链接到这里的component,如果path有值，则需要在routes.ts的path下再加上这里的path链接*/
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApprovallistComponent],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class ProjectApprovalModule { }
