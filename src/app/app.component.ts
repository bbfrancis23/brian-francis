import { Component } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'BrianFrancisNet';

  constructor(
    private overlayContainer: OverlayContainer
  ) {
    this.overlayContainer.getContainerElement().classList.add('pirate-theme');
    document.body.classList.add('pirate-theme');
  }

}

