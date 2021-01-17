import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-app-form',
  templateUrl: './add-app-form.component.html',
  styleUrls: ['./add-app-form.component.css']
})
export class AddAppFormComponent {
  constructor(
    public dialogRef: MatDialogRef<AddAppFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
