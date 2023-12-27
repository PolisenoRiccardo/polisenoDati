import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  names: string[]; // <-- aggiunta la proprietà name
  constructor() { 
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; // setta il nome nel costruttore
  }
  ngOnInit() {
  }
}


