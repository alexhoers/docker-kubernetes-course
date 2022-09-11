import { Injectable } from '@angular/core';
import { SettingsLoaderService } from './settings.loader.service';


@Injectable({
    providedIn: 'root'
  })
  export class SettingsService {

    constructor(private settingsLoaderService: SettingsLoaderService) {}


    getServerEndpoint(): string {
        return this.settingsLoaderService.configuration.CLIENT_SERVICE_PORT;
    }

  }