import { Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GlobalConst } from '../../core/constants/global.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [RouterModule],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  timeoutId?: any;

  constructor(private router: Router) {}

  public login(): void {
    localStorage.setItem(GlobalConst.token, 'test-token');
    this.timeoutId = setTimeout(() => {
      this.router.navigate(['/admin/']);
    }, 1500);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
