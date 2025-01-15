import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthHelper } from '../helpers/auth.helper';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authHelper: AuthHelper) {}

  canActivate(): boolean {
    if (this.authHelper.isAuthenticated()) {
      this.router.navigate(['/admin/']);
      return false;
    }
    return true;
  }
}
