import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importer HttpHeaders
import { Observable } from 'rxjs';
import { TestModel } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl = '/api/tests.php'; // Une seule URL pour toutes les actions
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Définir le header

  constructor(private http: HttpClient) {}

  getTests(): Observable<TestModel[]> {
    return this.http.get<TestModel[]>(this.apiUrl);
  }

  addTest(test: Omit<TestModel, 'id'>): Observable<any> {
    console.log('Envoi POST avec :', test); // Ajout de log pour déboguer
    return this.http.post(this.apiUrl, test, { headers: this.headers });
  }

  updateTest(test: TestModel): Observable<any> {
    console.log('Envoi PUT avec :', test); // Ajout de log
    return this.http.put(this.apiUrl, test, { headers: this.headers });
  }

  deleteTest(id: number): Observable<any> {
    console.log('Envoi DELETE avec ID :', id); // Ajout de log
    return this.http.delete(this.apiUrl, { headers: this.headers, body: { id } });
  }
}