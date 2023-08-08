import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  })
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {}

  @Output() confirmed = new EventEmitter<boolean>();

  /**
   *
   */
  onConfirm() {
    this.confirmed.emit(true);
  }

  /**
   *
   */
  onCancel() {
    this.confirmed.emit(false);
  }
}
