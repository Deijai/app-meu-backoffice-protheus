import { Component } from '@angular/core';
import { MenuProps } from './core/modules/shared/interfaces/menu.interface';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menu: MenuProps[] = [
    { name: 'Compras', redirectTo: 'purchase-order', icon: 'mail' },
    { name: 'Contratos', redirectTo: 'purchase-request', icon: 'paper-plane' },
    { name: 'Prestação de Contas', redirectTo: 'accountability', icon: 'heart' },
    { name: 'Ativos', redirectTo: 'accountability', icon: 'heart' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
