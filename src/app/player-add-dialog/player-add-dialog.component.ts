import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-player-add-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogContent, MatFormFieldModule, MatDialogActions, MatDialogClose, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './player-add-dialog.component.html',
  styleUrl: './player-add-dialog.component.scss'
})

export class PlayerAddDialogComponent {
  name = '';

  constructor(public dialogRef: MatDialogRef<PlayerAddDialogComponent>) { }

  onNoClick() {
    this.dialogRef.close();
  }
}
