import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Group } from '../group.model';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})

export class GroupListComponent implements OnInit, OnDestroy {

  groups: Group[] = [];
  groupsSub: Subscription;
  //isFetching = false;

  constructor(
    private groupsService: GroupsService
    ) {}

  ngOnInit() {
    this.groupsSub = this.groupsService.fetchGroups().subscribe(groupData => {
      this.groups = groupData
    })
  }

  ngOnDestroy() {
    this.groupsSub.unsubscribe()
  }

}
