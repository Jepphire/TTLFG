import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Group } from '../group.model';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  group: Group;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private groupsService: GroupsService
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.group = this.groupsService.selectGroup(this.id);
      }
    )
  }

}
