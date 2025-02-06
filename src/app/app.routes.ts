import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {CoursesComponent} from './components/courses/courses.component';
import {EnrollComponent} from './components/enroll/enroll.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:"full"
    },
    {
        path:'contact',
        component:ContactComponent,
    },
    {
        path:'blogs',
        component:BlogsComponent,
    },
    {
        path:'courses',
        component:CoursesComponent,
    },
   
    {
        path:'enroll',
        component:EnrollComponent,
    }
   
];
