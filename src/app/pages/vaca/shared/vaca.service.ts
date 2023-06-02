import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Vaca } from './vaca.model';

@Injectable({
  providedIn: 'root'
})
export class VacaService extends BaseResourceService<Vaca> {

  constructor(injector: Injector) { //Study Injector 
    super("http://localhost:8081/api/produtos/", injector, Vaca.fromJson)
  }
}
