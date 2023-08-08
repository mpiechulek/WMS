import { FormControl } from '@angular/forms';

export interface UserFormInterface {
  id: FormControl<string>;
  name: FormControl<string>;
  surname: FormControl<string>;
  position: FormControl<string>;
  entitlements: FormControl<string[]>;
}
