import { Component } from '@angular/core';
import { TestComponent } from "./components/test/test.component";
import { TestBtnComponent } from "./components/test-btn/test-btn.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent, TestBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'carbon-login-ui';
}
