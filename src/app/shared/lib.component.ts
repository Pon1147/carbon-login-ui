import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Carbon Angular imports
import { ButtonModule, IconModule, InputModule, ModalModule } from 'carbon-components-angular';
@Component({
  selector: 'app-shared-lib',
  template: '',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    IconModule,
    InputModule,
    ModalModule
  ]
})
export class LibComponent { }
// Export all modules for reuse
export const SHARED_MODULES = [
  CommonModule,
  RouterOutlet,
  FormsModule,
  ReactiveFormsModule,
  ButtonModule,
  IconModule,
  InputModule,
  ModalModule
];
