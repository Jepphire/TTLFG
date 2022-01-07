import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { exhaustMap, map, take } from "rxjs/operators";

import { Group } from "./group.model";
import { AuthService } from "../shared/auth/auth.service";

@Injectable({
  providedIn: 'root'
})

export class GroupsService {

  loadedGroups: Group[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {}

  submitGroup(
    groupName: string,
    gameType: string,
    gameName: string,
    groupDesc: string
  ) {
    const groupData: Group = {
      groupName: groupName,
      gameType: gameType,
      gameName: gameName,
      groupDesc: groupDesc
    }
    this
      .http
      .post<{ name: string }>(
        'https://ttlfg-812ce-default-rtdb.firebaseio.com/groups.json',
        groupData
      )
      .subscribe(responseData => {
        console.log(responseData)
      });
  }

  fetchGroups() {
    return this.http
      .get<{ [key: string]: Group}>(
        'https://ttlfg-812ce-default-rtdb.firebaseio.com/groups.json'
      )
      .pipe(
        map(responseData => {
          const groupArray: Group[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
            groupArray.push({ ...responseData[key], id: key });
            }
          }
          this.loadedGroups = groupArray;
          return groupArray;
        })
      )
  }

  selectGroup(id) {
    return this.loadedGroups.find(x => x.id === id);
  }
}
