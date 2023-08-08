import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { UserInterface } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() showUserProfileForm = false;
  @Output() addUser: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() patchUserData: EventEmitter<string> = new EventEmitter<string>();

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  @Input() users: UserInterface[] = [];

  /**
   *
   * @param userId
   */
  onPatchUserData(userId: string): void {
    if (userId) {
      this.patchUserData.emit(userId);
    }
  }

  /**
   *
   */
  onAddNewUser(): void {
    this.addUser.emit();
  }
}
