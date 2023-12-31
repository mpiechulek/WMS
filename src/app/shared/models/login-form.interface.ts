import { FormControl, FormGroup } from "@angular/forms";

export interface LoginFormInterface extends FormGroup {
  id: FormControl<string>;
  name: FormControl<string>;
  surname: FormControl<string>;
  position: FormControl<string>;
  entitlements: FormControl<string[]>;
}
