import { ForgetComponent } from './forget/forget.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { RouterModule } from '@angular/router';

const APP_ROUTES = [
    { path: '', component: FirstComponent },
    { path: 'second/:usNm', component: SecondComponent },
    { path: 'forgot/:usNm', component: ForgetComponent }
];

export const MyRouterModule = RouterModule.forRoot(APP_ROUTES);