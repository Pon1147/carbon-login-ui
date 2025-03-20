import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  title = `IBMid`;
  description = `Don't have an Account ?`;
  label = `IBMid`;
  theme: "light" | "dark" = "light";
}
