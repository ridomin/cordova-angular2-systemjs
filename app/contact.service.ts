import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from './contact';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactService {
    private _url = './mock/contacts.json';
    constructor(private http: Http) { }

    getContacts(){
       // let c1: Contact = { Id: 1, EmailAddress: "a@a.com", Name: "rido", PhoneNumber: "123" }
       // let c2: Contact = { Id: 2, EmailAddress: "b@b.com", Name: "odir", PhoneNumber: "222" }
       // let contacts: Contact[] = [c1, c2];
        
        
        //return Observable.apply(contacts);
        
        return this.http.get(this._url)
            .map(response => <Contact[]>response.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }
}