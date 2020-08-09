import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsService } from './items.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsResolverService {

  constructor(private itemsService: ItemsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.itemsService.getItems(); // async
  }

}
