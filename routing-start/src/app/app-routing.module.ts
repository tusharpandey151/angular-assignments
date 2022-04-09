import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service'
import { CanDeactivateGuardService } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'users', component: UsersComponent, children:[
      {path:':id/:name', component:UserComponent}
    ]},
    {path:'user/:id/:name', component: UserComponent},
    {path:'servers', canActivateChild: [AuthGuardService] ,component: ServersComponent,
     children: [
      {path:':id', component: ServerComponent, resolve: {server:ServerResolver}},
      {path:':id/edit', canDeactivate: [CanDeactivateGuardService], component:EditServerComponent}
    ]
    },
    //{path:'not-found', component:PageNotFoundComponent},
    {path:'not-found', component:ErrorPageComponent, data:{'message':'Page Not Found'}}, //Can be used in other routes, with a different message
    {path:'**', redirectTo:'/not-found'}//Make sure this is the last route, as routes are parsed from top to down, so if this is the first route, all urls will be routed to this
  ];

@NgModule( {
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}