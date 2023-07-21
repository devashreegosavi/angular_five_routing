import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  //servers= [{'name':'abc'}];

  constructor(private router : Router, private route:ActivatedRoute){

  }
  onReload(){
    //this.router.navigate(['servers'], {relativeTo : this.route});
  }
  
}
