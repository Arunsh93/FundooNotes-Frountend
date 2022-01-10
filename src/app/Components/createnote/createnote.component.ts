import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn:'root'
  })
  @Component({
    selector: 'app-note',
    templateUrl: './createnote.component.html',
    styleUrls: ['./createnote.component.scss']
  })
  export class CreateNoteComponent implements OnInit {
    show:boolean = true;
    noteColor = "white";
    pin:boolean=false;
    isReminder=false;
    Reminder="";
    NoteForm !: FormGroup;
    constructor(private snackBar:MatSnackBar) { }
  
    ngOnInit(): void {
      this.NoteForm = new FormGroup({
        Title: new FormControl(),
        Description:new FormControl()
      });
    }
}