import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

   //properties
   private sitemaps: Array<any>;
   private selectModule: string;
   private route: string;
   public moduleSitemaps: any;
 
   //cosntructo
   constructor(private router: Router) { }
 
 
   //implementation
   ngOnInit() {
 
       /*let result = this.moduleService.get();
       result.subscribe(
           (response) => {
 
               if (response.success)
                   this.moduleSitemaps = response.result;
               else
                  toastr.warning(response.messagge); 
 
           },
           (error) => {
               toastr.error("Error: " + error)
           }
       );*/
   }
 
   //methods
    public redirect(menu: any) {
 
       debugger
       /*let result = this.sitemapService.get(sitemap.id);
        result.subscribe(
           (response) => {
 
               if (response.success) {
                   sessionStorage.setItem('sitemap', JSON.stringify(response.result));
                   sessionStorage.setItem('selectedModule', sitemap.name )   ;
                   sessionStorage.setItem("isMenuOpen", "false"); 
                   this.router.navigate([sitemap.homePage]);
               }
           },
           (error) => {
               toastr.error("Error: " + error)
           },
        );*/
        this.sitemaps = [];        
        switch(menu)
        {
            case 1:
                this.sitemaps = [
                    {name: 'Productos', homePage: 'products', menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Clientes', homePage: 'customer', menu :[
                        {name: 'Nuevo' ,  route:'/create-customer'},
                        {name: 'Ver Todos' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Proveedores', homePage: 'provider', menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Ventas', homePage: 'sale', menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Compras', homePage: 'purchase', menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    }
                ];
                this.selectModule = 'Facturación';
                this.route = 'billing-main';
            break;
            case 2:
                this.sitemaps = [
                    {name: 'Plan Cuentas', homePage: 'products',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Libro Diario', homePage: 'customer',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Estados Financieros', homePage: 'provider',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Configuración', homePage: 'sale',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    }
                ];
                this.selectModule = 'Contabilidad';
                this.route = 'accounting-main';
            break;
            case 3:
                this.sitemaps = [
                    {name: 'Bodega', homePage: 'products',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Reportes', homePage: 'customer',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Configuración', homePage: 'sale',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    }
                ];
                this.selectModule = 'Contabilidad';
                this.route = 'inventory-main';
            break;
            case 4:
                this.sitemaps = [];
                this.selectModule = 'Configuraciones';
                this.route = 'configuration-main';
            break;
            case 5:
                this.sitemaps = [
                    {name: 'Usuarios', homePage: 'user',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Roles', homePage: 'roles',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    },
                    {name: 'Permisos', homePage: 'sale',menu :[
                        {name: 'Opcion 1' ,  route:'#'},
                        {name: 'Opcion 2' ,  route:'#'},
                        {name: 'Opcion 3' ,  route:'#'}]
                    }
                ];
                this.selectModule = 'Usuarios';
                this.route = 'users-main';
            break;
            default:
            break;
        }
        sessionStorage.setItem('sitemap', JSON.stringify(this.sitemaps));
        sessionStorage.setItem('selectedModule', this.selectModule )   ;
        sessionStorage.setItem("isMenuOpen", "false"); 
        this.router.navigate([this.route]);
 
    }
 
   public back(): void {
       window.history.back();
   }

}
