import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UserActionsEnum } from 'src/app/shared/enums/user-actions.enum';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserInterface } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  showUserProfileForm = false;
  userActionEnum = UserActionsEnum;
  private userForm!: FormGroup;

  users: UserInterface[] = [
    {
      id: '1',
      name: 'Jan',
      surname: 'Kowalksi',
      position: 'Kominiarz',
      entitlements: ['o-A', 'o-B'],
    },
    {
      id: '2',
      name: 'Karol',
      surname: 'Malinowski',
      position: 'Polityk',
      entitlements: ['o-A', 'o-C'],
    },
    {
      id: '3',
      name: 'Ernest',
      surname: 'Zagrzebski',
      position: 'Skoczek',
      entitlements: ['o-A', 'o-C', 'o-E'],
    },
    {
      id: '4',
      name: 'Stanisław',
      surname: 'Kania',
      position: 'Murarz',
      entitlements: ['o-A'],
    },
    {
      id: '5',
      name: 'Michał',
      surname: 'Krół',
      position: 'Anesozjolog',
      entitlements: ['o-B'],
    },
    {
      id: '6',
      name: 'Kamil',
      surname: 'Krakowiak',
      position: 'Rowerzysta',
      entitlements: ['o-A', 'o-D'],
    },
    {
      id: '7',
      name: 'Piotr',
      surname: 'Staszewski',
      position: 'Kelner',
      entitlements: ['o-A', 'o-E', 'o-D'],
    },
    {
      id: '8',
      name: 'Zygmunt',
      surname: 'Ochojski',
      position: 'Burmistrz',
      entitlements: [],
    },
    {
      id: '9',
      name: 'Anna',
      surname: 'Baranowska',
      position: 'Spawacz',
      entitlements: ['o-A'],
    },
    {
      id: '10',
      name: 'Robert',
      surname: 'Dudek',
      position: 'Terminator',
      entitlements: ['o-D'],
    },
  ];

  constructor(
    public readonly dialog: MatDialog,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initUserForm();
  }

  /**
   *
   */
  initUserForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      position: [''],
      entitlements: [[]],
    });
  }

  /**
   *
   */
  getUserList() {}

  /**
   *
   */
  get getUserForm(): FormGroup {
    return this.userForm;
  }

  /**
   *
   * @param userId
   */
  patchUser(userId: string): void {
    this.patchUserFormData(this.findUser(userId));
  }

  /**
   *
   * @param userId
   */
  findUser(userId: string): UserInterface {
    return this.users.filter((user) => user.id === userId)[0];
  }

  /**
   *
   */
  patchUserFormData(user: UserInterface): void {
    this.userForm.patchValue({
      name: user.name,
      surname: user.surname,
      position: user.position,
      entitlements: user.entitlements,
    });    
  }

  /**
   *
   */
  addNewUser() {
    this.showUserProfileForm = true;
    this.userForm.reset();
  }

  /**
   *
   * @param userAction
   */
  openDialog(userAction: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { name: this.returnUserActionName(userAction) },
    });

    dialogRef.componentInstance.confirmed.subscribe((result: boolean) => {
      if (result) {
        this.performUserDataManipulation(userAction);
      }
    });
  }

  /**
   *
   * @param userAction
   * @returns
   */
  returnUserActionName(userAction: string): string {
    return userAction === this.userActionEnum.CREATE ? 'zapisać' : 'usunąć';
  }

  /**
   *
   * @param userAction
   */
  performUserDataManipulation(userAction: string): void {
    if (userAction === this.userActionEnum.CREATE) {
      // Post user
      // ???? Creating/Editing POST/PATCH
      //should close the form
      this.showUserProfileForm = false;
      this.users = [...this.users, this.userForm.value];
           
    } else {
      // Delete user
      //should close the form      
      this.showUserProfileForm = false;
    }
  }

  /**
   *
   */
  getSingleUserData(userId: string) {}

  /**
   *
   */
  editUser(userData: UserInterface) {}

  /**
   *
   */
  deleteUser(userData: UserInterface) {}
}
