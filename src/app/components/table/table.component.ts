import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  // size = ButtonSize;
  isExpressive = false;
  onChange($event: boolean) {
    console.log($event);
    if ($event == true) {
      alert('checked');
    }
    else {
      alert('unchecked');
    }
  }
  title = `Log In`;
  label1 = `Don't have an Account ?`
  label2 = `IBMid`
  label3 = `Forgot ID?`

  labelIBM = `Create an IBMid`;
  theme: "light" | "dark" = "light";
  disabled = false;
  indeterminate = false;
  checked = false;
}
