import { Component } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent {

  private contacts: any[] = [];
  private filter: String = '';

  constructor(contactService: ContactsService) {
    contactService.getContacts().subscribe(
      data => {
        this.contacts = data;
      },
      err => {
        alert('Something went wrong!');
      }
    );
  }

  remove(contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

}
