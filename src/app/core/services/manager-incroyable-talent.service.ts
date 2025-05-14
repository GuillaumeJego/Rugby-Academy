import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../models/CategoryIncroyableTalent.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerIncroyableTalentService {
  private apiUrl = '/api/managers'; // URL de l'API (à ajuster selon votre backend)

  constructor(private http: HttpClient) {}

  // Récupérer la liste des gérants
  getManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.apiUrl);
  }

  // Inscription d'un nouveau gérant
  signUp(manager: Manager): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.apiUrl, manager);
  }
}