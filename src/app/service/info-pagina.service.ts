import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Serviio de InfoPágina listo');

    this.cargarInfo();
    this.cargarEquipo();
 
   }

   private cargarInfo(){
       //leer el archivo JSON
       this.http.get('assets/data/data-pagina.json')
       .subscribe((resp : InfoPagina) =>{
   
         this.cargada = true;
         this.info = resp;   
        
       });
   }

private cargarEquipo(){
  this.http.get('https://angular-html-c8c50-default-rtdb.firebaseio.com/equipo.json')
  .subscribe((resp: any) =>{

    this.equipo = resp;   
    
  });
  
}


}
