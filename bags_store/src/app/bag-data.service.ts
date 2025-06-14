import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Bag } from './bags-list/Bag';

const URL ='https://681fdf8972e59f922ef752f2.mockapi.io/bags/Bag';

@Injectable({
  providedIn: 'root'
})
export class BagDataService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Bag[]> {
    return this.http.get<Bag[]>(URL)
      .pipe(tap((bags: Bag[]) => bags.forEach(bag => bag.quantity = 0)));
  }
  
  public addBag(bag: Bag): Observable<Bag> {
    return this.http.post<Bag>(URL, bag);
  }
}

