import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate{
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:Boolean = false;
  areChangesSaved:Boolean = false;

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    //Also an option, if values change after first load, and this component is reloaded from within the component
    //this.route.queryParams.subscribe();
    //this.route.fragment.subscribe();
    this.route.queryParams.subscribe (
      (queryParam:Params)=> {
        this.allowEdit = queryParam['allowEdit'] == 1;
        console.log('Query PAram Changed to ' + this.allowEdit);
      }
    )
    this.server = this.serversService.getServer((+this.route.snapshot.params['id']));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.areChangesSaved = true;
  }

  canDeactivate() {
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.areChangesSaved) {
      return confirm("Do you wish to navigate away and Discard the changes");
    }
    else {
      return true;
    }
  }

}
