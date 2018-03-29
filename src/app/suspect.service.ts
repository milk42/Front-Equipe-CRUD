import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgForm, FormsModule } from '@angular/forms';
import { Suspect } from './suspect';
import { HttpHeaders } from '@angular/common/http';
// import { AppService } from './app.service';
import { map, delay, tap } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class SuspectService {

  constructor( private http: HttpClient) { }


  createSuspect(suspect: Suspect): Observable<Suspect> {
    console.log('le create fonctionne');
    return this.http.post<Suspect>(`http://localhost:8080/ajoutSuspect`, suspect);
  }


  getSuspects(): Observable<Suspect[]> {
    console.log('le get fonctionne');
    return this.http.get(`http://localhost:8080/suspects`) as Observable<Suspect[]>;
  }

  getSuspect(id: number): Observable<Suspect> {
    console.log('id' + id);
    return this.http
      .get<Suspect>('http://localhost:8080/suspect/' + id)
      .pipe(delay(1000));
  }

  updateSuspect(suspect: Suspect): Observable<Suspect> {
    console.log('le update fonctionne');
    return this.http.put<Suspect>('http://localhost:8080/editSuspect/' +
    suspect.id, suspect, httpOptions) as Observable<Suspect>;

  }

  deleteSuspect(id: number): Observable<any> {
    console.log('le delete fonctionne');
    return this.http.delete<any>('http://localhost:8080/supprimeSuspect/' + id)
    .pipe(delay(1000));
  }


}
