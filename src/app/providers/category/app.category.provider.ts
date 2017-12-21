import {Injectable, transition} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {URL} from '../../common/app.service.url';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class CategoryProvider {

    constructor(private http : Http){}

    private headers = new Headers({'Content-Type': 'application/json'});

    private serviceUrl = URL + '/category';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /**
     * This method retrieves list of categories
     */
    getAllCategories() : Promise<any> {
        let url = this.serviceUrl + '/getAllCategories';

        return this.http
            .get(url, {headers : this.headers, withCredentials : true})
            .toPromise()
            .then(res => {
                return res.json().data;
            })
            .catch(err => {
                this.handleError(err);
            })
    }

    /**
     * This method retrieves parent category list
     */
    getAllParentCategories() : Promise<any> {
        let url = this.serviceUrl + '/getAllParentCategories';

        return this.http
            .get(url, {headers : this.headers, withCredentials : true})
            .toPromise()
            .then(res => {
                return res.json().data;
            })
            .catch(err => {
                this.handleError(err);
            });
    }
}