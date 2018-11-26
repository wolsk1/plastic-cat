import { ClientsOverviewComponent } from './overview/clients-overview.component';
import { ClientDetailsComponent } from './details/client-details.component';
import { ClientEditComponent } from './edit/client-edit.component';

export * from './overview/clients-overview.component';
export * from './details/client-details.component';
export * from './edit/client-edit.component';

export const CLIENT_PAGES = [
  ClientsOverviewComponent,
  ClientDetailsComponent,
  ClientEditComponent
];