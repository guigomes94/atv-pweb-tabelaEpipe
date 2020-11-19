import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LetraMaiusculaPipe} from './letra-maiuscula.pipe';
import { CpfPipe } from './cpf.pipe';
import { TelefoneMaskPipe } from './telefone-mask.pipe';



@NgModule({
  declarations: [LetraMaiusculaPipe, CpfPipe, TelefoneMaskPipe],
  imports: [
    CommonModule
  ],
  exports: [
    LetraMaiusculaPipe,
    CpfPipe,
    TelefoneMaskPipe
  ]
})
export class PipesModule { }
