import { initializeAppSettings } from "./app-init-settings";
import { SettingsLoaderService } from "./core/services/settings.loader.service";
import { SettingsService } from "./core/services/settings.service";

export function initializeAppEnv(settingsService: SettingsService, settingsLoaderService: SettingsLoaderService): () => Promise<any> {
    return async (): Promise<any> => {
        return await initializeAppSettings(settingsLoaderService);
    };
  }
  
  