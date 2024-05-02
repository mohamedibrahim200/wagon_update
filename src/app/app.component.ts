import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { StartHederComponent } from "./start-heder/start-heder.component";
import { ScreenSliderComponent } from "./screen-slider/screen-slider.component";
import { TapsSliderComponent } from "./taps-slider/taps-slider.component";
import { Category1Component } from "./category1/category1.component";
import { Category2Component } from "./category2/category2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, StartHederComponent,
       ScreenSliderComponent, 
       TapsSliderComponent, Category1Component, Category2Component]
})
export class AppComponent {
  title = 'wagon.web';
}
