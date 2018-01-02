import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {URL} from '../../common/app.service.url';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class ProductProvider {

    constructor(private http : Http){}

    private headers = new Headers({'Content-Type': 'application/json'});

    private serviceUrl = URL + '/product';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /**
     * This method populates popular Products
     */
    getPopularProducts() : Promise<any> {
        let url = this.serviceUrl + '/getPopularProducts';

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
     * This method populates new products
     */
    getNewProducts() : Promise<any> {
        let url = this.serviceUrl + '/getNewProducts';

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
}