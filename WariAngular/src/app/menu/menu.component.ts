import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _authService: AuthService) { }
// on va charger le token à travers le localStorage
ngOnInit() {
  this._authService.loadToken();
}

isAdmin() {
  return this._authService.isAdmin();
}

isCaissier() {
  return this._authService.isCaissier();
}

isPartenaire() {
  return this._authService.isPartenaire();
}

isUser() {
  return this._authService.isUser();
}

isAuthenticated() {
  return this._authService.isAuthenticated();
}

}
