import { Component, OnInit, Input } from '@angular/core';

import { Group } from '../../group.model';
import { GroupsService } from '../../groups.service';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {

  @Input() group: Group;
  id: string;

  constructor(
    private groupsService: GroupsService
  ) { }

  ngOnInit(): void {
    this.id = this.group.id
  }

  onDeleteGroup(id) {
    this.groupsService.deleteGroup(id);
  }
}
