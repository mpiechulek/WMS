import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { UserActionsEnum } from 'src/app/shared/enums/user-actions.enum';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Output() userAction: EventEmitter<string> = new EventEmitter<string>();
  @Input() userForm!: FormGroup;
  userActionEnum = UserActionsEnum;

  entitlements = [
    { value: 'o-A', viewValue: 'Opcja A' },
    { value: 'o-B', viewValue: 'Opcja B' },
    { value: 'o-C', viewValue: 'Opcja C' },
    { value: 'o-D', viewValue: 'Opcja D' },
    { value: 'o-E', viewValue: 'Opcja E' },
  ]; 

  /**
   *
   * @param event
   */
  onSelectionChange(event: MatSelectChange): void {
    this.userForm.get('entitlements')!.setValue([...event.value]);
  }

  /**
   *
   * @param action
   */
  onUserAction(action: string): void {
    this.userAction.emit(action);
  }
}
