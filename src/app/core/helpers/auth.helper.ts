import { Injectable } from '@angular/core';
import { GlobalConst } from '../constants/global.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthHelper {
  private getToken(): string | null {
    return localStorage.getItem(GlobalConst.token);
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
