import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion = {
    categoria : '',
    desc1 : '',
    desc2 : '',
    producto : '',
    resumen : '',
    subtitulo1 : '',
    subtitulo2 : ''

  };
  id: any;

  constructor(private route : ActivatedRoute,
                    public productoService: ProductosService   ) { }

  ngOnInit(): void {

      this.route.params.subscribe(parametros => {
       
        
        this.productoService.getProducto (parametros['id'])
                .subscribe((producto  )=>{
                  this.id =  parametros['id'];
                  this.producto = producto;
                 
        });
      });

  }

}
