import { Injectable } from "@angular/core";
import { getDatabase, ref, push, set } from "firebase/database";

@Injectable({providedIn: 'root'})

export class databaseService {

  db = getDatabase();
  groupsListRef = ref(this.db, 'groups')
  newGroupRef = push(this.groupsListRef)

  createGroup(
    groupName: string,
    gameType: string,
    gameName: string,
    groupDesc: string
  ) {
    const groupData = {
      groupName,
      gameType,
      gameName,
      groupDesc
    }
    set(this.newGroupRef, groupData)
  }

}
