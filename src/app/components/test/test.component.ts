import { Component, ChangeDetectorRef } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
    featherAirplay,
    featherArrowRight,
    featherAlertCircle
} from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [SharedModule, NgIcon],
    viewProviders: [provideIcons({ featherAirplay, featherAlertCircle, heroUsers, featherArrowRight })],
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss'
})
export class TestComponent {
    // Component properties
    title = `Log In`; // Title of the login page
    label1 = `Don't have a password?`; // Label for account creation
    label2 = `IBMid`; // Label for IBMid input
    label3 = `Forgot ID?`; // Label for forgot ID link
    label4 = `Remember ID`; // Label for the "Remember ID" checkbox
    labelIBM = `Log in with IBMid`; // Label for IBMid login link
    theme: 'light' | 'dark' = "light"; // Theme of the component
    ibmid = ''; // IBMid input value
    disabled = false; // Checkbox disabled state
    indeterminate = false; // Checkbox indeterminate state
    checked = false; // Checkbox checked state
    isExpressive = false; // Expressive button style
    username = ''; // Username input value
    password = ''; // Password input value
    warningMessage = ''; // Holds the warning message text

    constructor(private cdr: ChangeDetectorRef) { }

    // Handles form submission
    onSubmit() {
        if (!this.ibmid) {
            this.warningMessage = 'Please enter a valid IBMid account';
            this.cdr.detectChanges(); // Ensure Angular detects the change
            return;
        }
        if (!this.isValidAccount(this.ibmid)) {
            this.warningMessage = "This's Account incorrect or not exist!!! Try again";
            this.cdr.detectChanges(); // Ensure Angular detects the change
            return;
        }
        this.warningMessage = '';
        alert(`Logging in with Username: ${this.ibmid}`);
    }

    isValidAccount(ibmid: string): boolean {
        // Replace this with actual validation logic
        return ibmid === 'admin@ibm.com';
    }

    // Toggles the theme between light and dark
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
    }

    // Updates the username or password based on input changes
    onInputChange(event: Event, field: 'username' | 'password') {
        const input = event.target as HTMLInputElement;
        this[field] = input.value;
    }

    // Handles changes to the "Remember ID" checkbox
    onCheckedChange($event: boolean) {
        alert($event ? 'You choose to remember your ID !!' : 'You choose not to remember your ID !!');
    }
}