import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService {
  protected baseUrl: string = environment.apiBaseUrl;

  constructor(protected http: HttpClient) {}
}
