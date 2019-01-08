import { Injectable } from '@angular/core';

@Injectable()
export class ContactclassService {   
    constructor(){}
     
    public firstname : string;
    public lastname : string;
    public address : string;
    public contact : string;
    public country : string;
    public city : string;
    public postalcode : string;
    public email : string;
    public remarks : string;
}