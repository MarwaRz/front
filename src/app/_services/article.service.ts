import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from './article';


import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:9090/api/articles';
 
  host :string = "http://localhost:9090";
  
  list: Article[];
  tokenStr = localStorage.getItem('token');
  public dataForm!:  FormGroup; 
  constructor(private http: HttpClient) { }
  lista : Article[];



  


  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }







 
  createData(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData);
  }
  
  updatedata(id: number, article : Article): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, article);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }
  
  

 


  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
}
