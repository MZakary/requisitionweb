import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RequisitionJSON } from '../RequisitionJSON/RequisitionJSON'; // Adjust path

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmExitGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate
  ): boolean | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
