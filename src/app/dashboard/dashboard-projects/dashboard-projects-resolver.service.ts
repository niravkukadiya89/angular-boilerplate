import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoaderService } from 'src/app/core/loader/loader.service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardProjectsResolverService {

  constructor(private loaderService: LoaderService) { }
 
  
}
