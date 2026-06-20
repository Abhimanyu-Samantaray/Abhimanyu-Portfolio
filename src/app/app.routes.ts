import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { IndexComponent } from './components/index/index.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
