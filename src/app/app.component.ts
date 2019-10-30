import { Component, } from '@angular/core';
import {ThemeService} from './theme/theme-service/theme.service';
import { AngularMaterialThemes} from './theme/angular-material-theme/angular-material-themes';
import {BehaviorSubject, Observable} from 'rxjs';

interface Person {
  readonly firstName:string;
  readonly lastName:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  _myPerson: BehaviorSubject<Person> = new BehaviorSubject<Person>({ firstName: 'Brian', lastName: 'Francis'});

  setMyPerson(person: Person){this._myPerson.next(person)};
  getMyPerson(): Observable<Person>{ return this._myPerson.asObservable() }

  themes = AngularMaterialThemes;
  constructor( public themeService: ThemeService ) {}


}

