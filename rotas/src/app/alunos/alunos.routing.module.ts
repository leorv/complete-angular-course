import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';

const alunosRoutes: Routes = [
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/edit', component: AlunoFormComponent }
        ]
    }
]

@NgModule({
    declarations: [],

    imports: [
        RouterModule.forChild(alunosRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AlunosRoutingModule { }
