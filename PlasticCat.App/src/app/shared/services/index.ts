import { SettingsService } from './settings.service';
import { HttpService } from './http.service';

export * from './settings.service';

export const SHARED_SERVICES = [
  HttpService,
  SettingsService
];