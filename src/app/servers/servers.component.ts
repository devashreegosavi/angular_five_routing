import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private router : Router, private route:ActivatedRoute,private serversService: ServersService){

  }
  onReload(){
    //this.router.navigate(['servers'], {relativeTo : this.route});
  }
  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  
}
