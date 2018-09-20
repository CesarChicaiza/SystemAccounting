import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Configuration } from '../../../app.configuration'

@Injectable()
export class CustomerService {

  private serviceUrl: string;

  constructor(private http: Http) {
    this.serviceUrl = Configuration.serverWithApiUrl + 'core/ormCreate';
}


  public get(id: string): Observable<any> {


    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', Configuration.getToken());

    var params = '?id=' + id;

    return this.http.get(this.serviceUrl + params, { headers: headers }).pipe(map(res => res.json()));
  }


  public save(id: string, fields: any): Observable<any> {


    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', Configuration.getToken());

    let form: any = new Object();
    form.id = id;
    form.fields = fields;

    return this.http.post(this.serviceUrl, form, { headers: headers }).pipe(map(res => res.json()));

  }



}

