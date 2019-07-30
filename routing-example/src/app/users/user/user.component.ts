import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramId = 'id';
  paramName = 'name';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params[this.paramId],
      name: this.route.snapshot.params[this.paramName],
    };

    this.route.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params[this.paramId],
          name: params[this.paramName],
        };
      }
    );
  }

}
