import { Injectable } from '@angular/core';
import { SequenceItem } from '../+state/sequence/sequence.interface';
import { GroupActionUpdateRequest } from '../+state/state.interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class FlowService {
  updateGroup(id: string, req: GroupActionUpdateRequest) {
    this.httpService.setGroupState(id, req);
  }

  constructor(private httpService: HttpService) {}
}
