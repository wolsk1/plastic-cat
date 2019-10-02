import { ROUTE_CONSTANTS } from '../route.constants';
import { Express, Request, Response } from 'express';
import { AppConfig } from '../app.config';
import { CatResponse } from '../models';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

export function ClientsRepo(app: Express): void {
    const baseUrl = `${AppConfig.apiUrl}/clients`;
    const collectionName = 'clients';
    const ID_LENGTH = 10;
    const ID_PREFIX = 'C';
    const CLIENT_COUNT_KEY = 'count';

    app.get(baseUrl, getClients);
    app.post(`${baseUrl}/create`, create);

    const clientDb = low(new FileSync('./app/clients.json'));
    clientDb.defaults({ clients: [], count: 1 })
        .write();
    const generateId = idGeneratorFactory(ID_PREFIX);

    async function getInitialCount(): Promise<any> {
        return await clientDb.get(CLIENT_COUNT_KEY).value();
    }

    async function updateCount(): Promise<void> {
        await clientDb
            .update(CLIENT_COUNT_KEY, (n: number) => ++n)
            .write();        
    }

    function getClients(request: Request, response: Response): void {
        response.send(clientDb.get(collectionName).value());
    }

    async function create(request: Request, response: Response): Promise<void> {
        console.log('received client', request.body);
        const payload = request.body;

        payload.id = await generateId();
        clientDb.get(collectionName)
            .push(request.body)
            .write();
        response.send(new CatResponse(true));
    }

    async function getZeroCount(length: number): Promise<number> {
        const initialCount = await getInitialCount();
        const nonZeroDigits = initialCount.toString().length;

        return length - nonZeroDigits;
    }

    async function getZeros(): Promise<string> {
        const zeroCount = await getZeroCount(ID_LENGTH);
        let zeros = '';

        for (let i = 1; i <= zeroCount; i++) {
            zeros += '0';
        }

        return zeros;
    }

    function idGeneratorFactory(
        prefix: string = ''
    ): () => Promise<string> {
        return async () => {
            let zeros = await getZeros();
            const initialCount = await getInitialCount();
            await updateCount();

            return `${prefix}${zeros}${initialCount}`;
        }
    }
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
