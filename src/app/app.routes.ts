import { Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent, title:'Search Flight' },
  { path: 'book-flight', component: BookFlightComponent, title:'Book new ticket' },
  { path: 'bookings', component: MyBookingsComponent, title:'My-Bookings' },
  { path: '', component:LayoutComponent,
    children:[
      {
        
      }
    ]
   },
];
