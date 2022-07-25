import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NodeService {

  
  constructor(private httpClient: HttpClient) { }

  public getNode(){
    return this.httpClient.get(`http://localhost:8080/api/node/`);
  }

  public createNode(data:any){
    return this.httpClient.post(`http://localhost:8080/api/node/`,data);
  }

  public deleteNode(id:any  ){
    return this.httpClient.delete(`http://localhost:8080/api/node/${id}`);
  }
}
