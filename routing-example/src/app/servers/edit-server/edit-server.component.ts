import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  changesSaved = false;

  paramsId = 'id';
  paramAllowEdit = 'allowEdit';
  allowEdit = false;
  id: number;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params[this.paramsId];
    this.server = this.serversService.getServer(this.id);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params[this.paramAllowEdit]) {
          this.allowEdit = params[this.paramAllowEdit] === '1';
        }

        if (params[this.paramsId]) {
          this.id = +params[this.paramsId];
        }
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && (!this.changesSaved)) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
