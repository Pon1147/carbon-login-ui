import { Component } from '@angular/core';
import { TestComponent } from "./components/test/test.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'carbon-login-ui';
}
