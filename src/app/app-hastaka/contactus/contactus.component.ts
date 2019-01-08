import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../../service/contactus.service';
import { ContactclassService } from '../../service/contactclass.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  //private objContService : ContactusService;
  //private objData : ContactclassService;
  public _firstname : string;
  private _lastname : string;
  private _address : string;
  private _contact : string;
  private _country : string;
  private _city : string;
  private _email : string;
  private _postalcode : string;
  private _remarks : string;

  constructor(private contactData : ContactclassService,private contactService : ContactusService) {
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
