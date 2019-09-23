import { Component, } from '@angular/core';
import {ThemeService} from './theme/theme-service/theme.service';
import { AngularMaterialThemes} from './theme/angular-material-theme/angular-material-themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  themes = AngularMaterialThemes;
  constructor( public themeService: ThemeService ) {}
}

