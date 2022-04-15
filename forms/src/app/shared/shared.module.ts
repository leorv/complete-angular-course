import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';

import { DropdownService } from './services/dropdown.service';


@NgModule({
  declarations: [
      FormDebugComponent,
      CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    HttpClientModule
  ],
  exports:[
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }