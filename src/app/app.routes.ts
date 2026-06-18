import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        component: IndexComponent
    }
];
