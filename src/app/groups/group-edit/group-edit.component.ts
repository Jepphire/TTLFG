import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GroupsService } from '../groups.service';
import { Group } from '../group.model';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  groupEditForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private groupsService: GroupsService
  ) {}

  ngOnInit(): void {
    this.groupEditForm = new FormGroup({
      'groupName': new FormControl(null, Validators.required),
      'gameType': new FormControl(null, Validators.required),
      'gameName': new FormControl(null, Validators.required),
      'groupDesc': new FormControl(null, Validators.required)
    });
  }

  onSubmitGroup(groupData: Group) {
    this.groupsService.submitGroup(
      groupData.groupName,
      groupData.gameType,
      groupData.gameName,
      groupData.groupDesc
    );
  }

  onCancelGroup() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
