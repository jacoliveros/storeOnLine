import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

/* Auth service */
import { AuthService } from './servicios/auth.service';

/* Firebase services */
import { environment } from 'src/environments/environment';         //variable de entorno donde se encuentra las claves 
                                                                    //para cceder a la base de datos firebase
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule} from '@angular/fire/compat';
/* Angular Material */
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, 
    MatButtonModule,
    MatIconModule
   
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
