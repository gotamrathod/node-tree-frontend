import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/";

@Component({
  selector: "app-create-node",
  templateUrl: "./create-node.component.html",
  styleUrls: ["./create-node.component.scss"],
})
export class CreateNodeComponent implements OnInit {
  name: string;
  email: string;
  constructor(
    private dialogRef: MatDialogRef<CreateNodeComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {}

  ngOnInit() {}

  onClose() {
    this.dialogRef.close();
  }

  submit(event: any) {
    debugger;
    const obj = {
      name: event.target.uname.value,
      email: event.target.email.value,
      date: event.target.date.value,
    };
    this.dialogRef.close(obj);
  }
}
