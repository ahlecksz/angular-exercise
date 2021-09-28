import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../mock-contacts';
import { Contact } from '../contact'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedContact?: Contact;
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
