import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SesionComponent } from './sesion/sesion.component';
import { LibrosComponent } from './libros/libros.component';
import { ResenasComponent } from './resenas/resenas.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { AdmiComponent } from './admi/admi.component';
import { AutorComponent } from './autor/autor.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { GeneroComponent } from './genero/genero.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'resenas', component: ResenasComponent },
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'admi', component: AdmiComponent },
  { path: 'autor', component:AutorComponent },
  { path: 'empleado', component:EmpleadoComponent},
  { path: 'genero', component:GeneroComponent},
  { path: 'empleado', component:EmpleadoComponent},
  { path: 'sesion', component: SesionComponent }
];
