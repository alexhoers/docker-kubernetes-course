import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {shareReplay} from 'rxjs/operators';
import { ApplicationSettings } from './application.settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsLoaderService {
  private readonly CONFIG_URL = 'assets/env/application-config.json';
  public configuration: ApplicationSettings = new ApplicationSettings();

  constructor(private http: HttpClient) {
  }

  public loadConfigurations(): Promise<ApplicationSettings> {
    return this.loadConfigurationFile(this.CONFIG_URL);
  }

  private async loadConfigurationFile(filePath: string): Promise<ApplicationSettings> {
    const settings: Promise<ApplicationSettings> = this.loadJsonFile(filePath);
    if (this.configuration.CLIENT_SERVICE_PORT === '') {
      this.configuration = await settings;
      console.log(settings);
    }
    return settings;
  }

  private loadJsonFile(filePath: string): Promise<ApplicationSettings> {
    return this.http.get<ApplicationSettings>(filePath).pipe(
      shareReplay(1)
    ).toPromise();
  }
}


