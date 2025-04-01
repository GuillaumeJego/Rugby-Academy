import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestModel } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
    private apiUrl = 'https://www.metana.fr/api/tests.php'; // Une seule URL pour toutes les actions
  
    constructor(private http: HttpClient) {}
  
    getTests(): Observable<TestModel[]> {
      return this.http.get<TestModel[]>(this.apiUrl);
    }
  
    addTest(test: Omit<TestModel, 'id'>): Observable<any> {
      return this.http.post(this.apiUrl, test);
    }
  
    updateTest(test: TestModel): Observable<any> {
      return this.http.put(this.apiUrl, test);
    }
  
    deleteTest(id: number): Observable<any> {
      return this.http.delete(this.apiUrl, { body: { id } });
    }
  }