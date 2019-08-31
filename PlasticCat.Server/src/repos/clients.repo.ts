import { ROUTE_CONSTANTS } from '../route.constants';
import { Express } from 'express';

const BASE_URL = `${ROUTE_CONSTANTS}/clients`;

export function clientsRepo(app: Express): void {
    app.get(BASE_URL, getClients);

}

function getClients(request, response) {
    response.send([
        new Client('0001', 'SIA "Gurķis"', undefined, '+37129799290'),
        new Client('0011', 'AS "Zapte"'),
        new Client('0002', 'Zigis', 'Caurums')
    ]);
}

export class Client {
    constructor(
        public userId: string,
        public name: string,
        public surname?: string,
        public phone?: string,
        public email?: string
    ) { }
}