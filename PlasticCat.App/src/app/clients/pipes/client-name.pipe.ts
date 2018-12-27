import { PipeTransform, Pipe } from "@angular/core";
import { Client } from "../models/client.models";

@Pipe({name: 'clientName'})
export class ClientNamePipe implements PipeTransform {
  transform(client: Client) {
    return client.surname
    ? `${client.name} ${client.surname}`
    : client.name
  }
}