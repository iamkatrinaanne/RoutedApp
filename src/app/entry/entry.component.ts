import { Component, OnInit } from '@angular/core';
import {SharedService } from '../shared.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
constructor (private dataStore: SharedService) {}
  

  ngOnInit() {
  }
onSubmit(nameForm){
this.dataStore.addNewName(nameForm.value.number, nameForm.value.fname,  nameForm.value.lname, nameForm.value.program, nameForm.value.year, )
nameForm.reset();
}

}