import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { GlobalConst } from '../core/constants/global.constant';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [
    RouterLink,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzIconModule,
    NzAvatarModule,
  ],
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  isCollapsed = false;

  constructor() {}

  ngOnInit() {}

  public logout(): void {
    localStorage.removeItem(GlobalConst.token);
  }
}
