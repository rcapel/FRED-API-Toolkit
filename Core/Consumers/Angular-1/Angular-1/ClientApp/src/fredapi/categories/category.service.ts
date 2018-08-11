import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICategoryResponse } from './category.interfaces'

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public get(categoryId: number, fetchChildren: boolean = false): Observable<ICategoryResponse> {
    if (fetchChildren) {
      return this.http.get<ICategoryResponse>(this.baseUrl + 'api/categoryChildren/' + categoryId);
    }
    return this.http.get<ICategoryResponse>(this.baseUrl + 'api/category/' + categoryId);
  }

}

