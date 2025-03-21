import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_MODULES } from '../../../../carbon-login-ui/src/app/shared/lib.component';

@Component({
    standalone: true,
    templateUrl: './test-btn.component.html',
    styleUrls: ['./test-btn.component.scss'],
    selector: 'app-test-btn',
    imports: [CommonModule, SHARED_MODULES],
})
export class TestBtnComponent {
    isExpressive = false; // Example default value
    disabled = false; // Example default value

    onClick(event: Event): void {
        console.log('Button clicked', event);
    }

    onMouseEnter(event: Event): void {
        console.log('Mouse entered', event);
    }

    onMouseLeave(event: Event): void {
        console.log('Mouse left', event);
    }

    onFocus(event: Event): void {
        console.log('Button focused', event);
    }

    onBlur(event: Event): void {
        console.log('Button blurred', event);
    }
}