import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AppHeaderComponent } from './header/app-header.component';
import { HeaderInternalComponents } from './header/app-header.component';
import { BodyInternalComponents } from './body/body.internal';
import { AuthGuard } from './auth/AuthGuard';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private login:AuthGuard) { }
  
    isLoggedIn:Observable<boolean>;
    
    ngOnInit() {
      this.isLoggedIn= this.login.isLoggedIn;
    }
  

}

export const AppInternalComponents = [AppHeaderComponent, HeaderInternalComponents, BodyInternalComponents]