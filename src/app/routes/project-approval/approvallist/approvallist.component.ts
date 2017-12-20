import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class RandomUserService {
    randomUserUrl = 'https://api.randomuser.me/';

    getUsers(pageIndex = 1, pageSize = 10, sortField, sortOrder, genders) {
        let params = new HttpParams()
            .append('page', `${pageIndex}`)
            .append('results', `${pageSize}`)
            .append('sortField', sortField)
            .append('sortOrder', sortOrder);
        genders.forEach(gender => {
            params = params.append('gender', gender);
        });
        return this.http.get(`${this.randomUserUrl}`, {
            params: params
        })
    }

    constructor(private http: HttpClient) {
    }
}

@Component({
    selector: 'app-approvallist',
    providers: [ RandomUserService ],
    templateUrl: './approvallist.component.html',
    styles: []
})

export class ApprovallistComponent implements OnInit {
    _title = true;
    r_current = 1;
    _pageSize = 10;
    _total = 1;
    _dataSet = [];
    _loading = true;
    _sortValue = null;
    _filterGender = [
        { name: 'male', value: false },
        { name: 'female', value: false }
    ];

    sort(value) {
        this._sortValue = value;
        this.refreshData();
    }

    reset() {
        this._filterGender.forEach(item => {
            item.value = false;
        });
        this.refreshData(true);
    }

    constructor(private _randomUser: RandomUserService) {
    }

    refreshData(reset = false) {
        if (reset) {
            this._current = 1;
        }
        this._loading = true;
        const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
        this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender).subscribe((data: any) => {
            this._loading = false;
            this._total = 200;
            this._dataSet = data.results;
        })
    };

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.refreshData();
  }

}
