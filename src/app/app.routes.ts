import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { ManpowerComponent } from './manpower/manpower.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { TechnologyComponent } from './technology/technology.component';
import { RealEstateComponent } from './real-estate/real-estate.component';

export const routes: Routes = [
{
path:'',
component: HomeComponent
},
{
 path:'aboutus',
component: AboutComponent
},
{

 path:"contactus",
component: ContactusComponent

},
{
 path:"services",
component:ServiceComponent

},
{
 path:"plumbers",
component:PlumbingComponent

},


{
 path:"manpower",
component:ManpowerComponent

},
{
 path:"logistics",
component:LogisticsComponent

},
{
 path:"hospitality",
component:HospitalityComponent

},
{
 path:"technology",
component:TechnologyComponent

},

{
 path:"realestate",
component:RealEstateComponent

},





{ path: '**', component: NotfoundComponent }

];