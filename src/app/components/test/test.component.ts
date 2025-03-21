import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
@Component({
    selector: 'app-test',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss'
})
export class TestComponent {
    // Add this property to resolve the error

    onSubmit() {
        throw new Error('Method not implemented.');
    }
    onCheckedChange($event: boolean) {
        if ($event === true) {
            console.log('checked');
        }
        else {
            console.log('unchecked');
        }
    }
    title = `Log In`;
    label1 = `Don't have a password?`;
    label2 = `IBMid`;
    label3 = `Forgot ID?`;
    labelIBM = `Log in with IBMid`;
    theme: 'light' | 'dark' = "light";
    ibmid = '';
    disabled = false;
    indeterminate = false;
    checked = false;
    isExpressive = false;
}