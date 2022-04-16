import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DropdownService } from './services/dropdown.service';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';



@NgModule({
  declarations: [
      FormDebugComponent,
      CampoControlErroComponent,
      ErrorMsgComponent,
      InputFieldComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
