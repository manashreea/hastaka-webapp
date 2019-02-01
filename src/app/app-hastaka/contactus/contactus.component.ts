import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../../service/contactus.service';
import { ContactclassService } from '../../service/contactclass.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  public contactData : ContactclassService;
  constructor(private _contactData : ContactclassService,private contactService : ContactusService) {
    this.contactData = _contactData
   }

  ngOnInit() {
  }

  submitData(): void{
    //this.objData = new  ContactclassService();
    // this.objData.firstname = this._firstname;
    // this.objData.lastname = this._lastname;
    // this.objData.address = this._address;
    // this.objData.contact = this._contact;
    // this.objData.country = this._country;
    // this.objData.city = this._city;
    // this.objData.email = this._email;
    // this.objData.postalcode = this._postalcode;
    // this.objData.remarks = this._remarks;
    //console.log(this._firstname,'---this._firstname---this._firstname---');

    console.log(this.contactData.firstname,'this.contactData---this.contactData---this.contactData--',this.contactData);
    this.contactService.sumbitContactUs(this.contactData);
  }

}
