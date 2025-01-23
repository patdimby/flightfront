import { Component } from '@angular/core';
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { SharedModule } from './shared/shared.module';


@Component({
  standalone: true,  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SearchFormComponent, SharedModule],
})
export class AppComponent { 
  title = 'Hello World!';
}
