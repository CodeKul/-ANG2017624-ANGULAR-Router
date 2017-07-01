import { ProfileComponent } from './second/profile.component';
import { PaymentComponent } from './second/payment.component';
import { ForgetComponent } from './forget/forget.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { RouterModule, Routes } from '@angular/router';

const SECOND_ROUTES: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'payment', component: PaymentComponent }
];

const APP_ROUTES = [
    { path: '', component: FirstComponent },
    { path: 'second/:usNm', component: SecondComponent, children : SECOND_ROUTES },
    { path: 'forgot/:usNm', component: ForgetComponent }
];

export const MyRouterModule = RouterModule.forRoot(APP_ROUTES);