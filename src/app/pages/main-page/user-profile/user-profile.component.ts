import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  foods = [
    { value: 'o-A', viewValue: 'Opcja A' },
    { value: 'o-B', viewValue: 'Opcja B' },
    { value: 'o-C', viewValue: 'Opcja C' },
    { value: 'o-D', viewValue: 'Opcja D' },
    { value: 'o-E', viewValue: 'Opcja E' },
  ];
}
