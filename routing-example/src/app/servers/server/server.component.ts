import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  paramId = 'id';
  paramAllowEdit = 'allowEdit';
  allowEdit = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params[this.paramAllowEdit]) {
          this.allowEdit = params[this.paramAllowEdit] === '1';
        }
      }
    );

    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     if (params[this.paramId]) {
    //       this.server = this.serversService.getServer(+params[this.paramId]);
    //     }
    //   }
    // );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
