import { SettingsLoaderService } from "./core/services/settings.loader.service";

export function initializeAppSettings(loaderService: SettingsLoaderService): Promise<any> {
    return loaderService.loadConfigurations();
  }
  