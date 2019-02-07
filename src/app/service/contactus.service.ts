import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
declare var $ : any; 

@Injectable()
export class ContactusService {
    
    //private filejson = require('../../assets/data/contactus.json');
    private readonly _filewithpath : string = environment.jsonapiURL;
    private contactsdata = [];
    constructor(private _http : Http){
        console.log('environment.jsonapiURL >>>> ',environment.jsonapiURL)
        this.getdata();
    }    

    private extractData(res : Response){
        let body = res.json();
        return body;
    }

    private handleError(err: Response|any){
        console.error(err.message | err);
        return Observable.throwError(err);
    }

    getdata() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this._filewithpath,options)
        .map((res : Response)=> res.json())
        .subscribe(data => { this.contactsdata = data; } , err => console.log(err));        

        // .subscribe(
        //     // the first argument is a function which runs on success
        //     data => { console.log(data[0],'---data---data---data---data'); },
        //     // the second argument is a function which runs on error
        //     err => {console.log(err);}
        //     // the third argument is a function which runs on completion
        //     //() => console.log('done loading data.....',this.contactsdata)
        //     );
    }

    updatedata(objData) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(objData);
        //console.log(body,'---body---body---body---',this._filewithpath);
        return this._http.post(this._filewithpath,body,options)
            .map((res:Response) => res.json())
            .subscribe(
                data => {
                    this.getdata();
                    return true;
                },
                err =>  {
                    console.log('Error in saving data!!!');
                    Observable.throwError(err)
                }
            );
    }

    sumbitContactUs(varObj:any): void{
        let data = 
            {
                "FirstName":varObj.firstname,
                "LastName":varObj.lastname,
                "Address":varObj.address,
                "Contact":varObj.contact,
                "Country":varObj.country,
                "City":varObj.city,
                "PostalCode":varObj.postalcode,
                "Email":varObj.email,
                "Remarks":varObj.remarks
            };        

        console.log(this.contactsdata,"Data passed to service >> ", data);
        this.updatedata(data);
    }
}