import { Routes} from '@angular/router';
import { NewUserComponent } from './new-user.component';
import { UpdateUserComponent } from './update-user.component';
import { GetUserComponent } from './get-user.component';

export const USER_ROUTES: Routes = [
            { path: 'new', component: NewUserComponent },
            { path: 'update', component: UpdateUserComponent },
            { path: 'get', component: GetUserComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'new' }
        ];
