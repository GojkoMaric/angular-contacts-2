import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../shared/services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent implements OnInit {
  
  private contact: any;

  constructor(private route: ActivatedRoute,
              private contactService: ContactsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.contact = this.contactService.getContacts().find(item => item['id'] == id);
    });
  }
}
