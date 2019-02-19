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
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append("Access-Control-Allow-Origin",'true');
        headers.append("Access-Control-Allow-Headers", "Access-Control-*,Cache-Control, username,userpassword,Pragma, Origin, Authorization,X-PINGOTHER, Content-Type, X-Requested-With,X-XSRF-TOKEN, query");
        let options = new RequestOptions({ headers: headers });
        let APIUrl = this._filewithpath + "/getContactUsDetails";
        return this._http.get(APIUrl,options)
        .map((res : Response)=> res.json())
        .subscribe(result => { 
            console.log(result,'--result---result---result');
            this.contactsdata = result.data; } , err => console.log(err));        

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
        let headers = new Headers({ 'Content-Type': 'application/json'});
        var data = JSON.stringify(objData);
        let options = new RequestOptions({ headers: headers});

        let APIUrl = this._filewithpath + "/saveContactUsDetails";
        console.log(data,'---body---body---body---',APIUrl);
        return this._http.post(APIUrl, data, options)
            .map((res:Response) => res.json())
            .subscribe(
                data => {
                    console.log(data,'res res res res');
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
                "firstname":varObj.firstname,
                "lastname":varObj.lastname,
                "address":varObj.address,
                "contact":varObj.contact,
                "country":varObj.country,
                "city":varObj.city,
                "postalcode":varObj.postalcode,
                "email":varObj.email,
                "remarks":varObj.remarks
            };  
            
            // {
            //     "FirstName":"Manashree",
            //     "LastName":"Agashe",
            //     "Address":"Thane",
            //     "Contact":"89568989",
            //     "Country":"India",
            //     "City":"Thane",
            //     "PostalCode":"345346",
            //     "Email":"sgsgssese",
            //     "Remarks":"vbmnvbmvbmvbmvb"
            // };              

        console.log(this.contactsdata,"Data passed to service >> ", data);
        this.updatedata(data);
    }
}