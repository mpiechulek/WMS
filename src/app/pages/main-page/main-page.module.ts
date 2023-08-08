import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Materials
import { MainPageComponent } from './main-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
//
import { SharedModule } from 'src/app/shared/shared.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ListComponent } from './list/list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MainPageComponent,
    ToolBarComponent,
    ListComponent,
    UserProfileComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    ScrollingModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class MainPageModule {}
