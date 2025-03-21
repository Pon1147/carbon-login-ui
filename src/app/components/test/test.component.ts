import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay, featherArrowDown } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';
@Component({
    selector: 'app-test',
    standalone: true,
    imports: [SharedModule, NgIcon,],
    viewProviders: [provideIcons({ featherAirplay, heroUsers, featherArrowDown })],
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
            alert('You choose to remember your ID !!');
        }
        else {
            alert('You choose not to remember your ID !!');
        }
    }
    title = `Log In`;
    label1 = `Don't have a password?`;
    label2 = `IBMid`;
    label3 = `Forgot ID?`;
    label4 = `Remember ID`;
    labelIBM = `Log in with IBMid`;
    theme: 'light' | 'dark' = "light";
    ibmid = '';
    disabled = false;
    indeterminate = false;
    checked = false;
    isExpressive = false;
}