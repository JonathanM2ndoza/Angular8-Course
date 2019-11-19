import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { UpdateUserComponent } from './components/user/update-user.component';
import { GetUserComponent } from './components/user/get-user.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'user/:id',
        component: UserComponent,
        children: [
            { path: 'new', component: NewUserComponent },
            { path: 'update', component: UpdateUserComponent },
            { path: 'get', component: GetUserComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'new' }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(ROUTES/*, {useHash: true}*/);
