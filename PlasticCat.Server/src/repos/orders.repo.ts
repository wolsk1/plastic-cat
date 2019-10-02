import { ROUTE_CONSTANTS } from '../route.constants';
import { Express, Request, Response } from 'express';
import { AppConfig } from '../app.config';
import { CatResponse } from '../models';

export class OrdersRepo {
    private readonly baseUrl = `${AppConfig.apiUrl}/orders`;

    constructor(
        app: Express
    ) {
        app.get(this.baseUrl, this.getOrders);
        app.post(`${this.baseUrl}/create`, this.create);
    }

    public getOrders(request, response): void {
        response.send([
            new Order('2213213', 'Plastmasas kaķis')
        ]);
    }

    public create(request: Request, response: Response): void {
        console.log('received order', request.body);
        response.send(new CatResponse(true));
    }
}

export enum OrderStatus {
    toDo,
    inProgress,
    blocked,
    done
  }

export class Order {

    constructor(
        public clientId: string,
        public subject: string,
        public description: string = '',
        public status: OrderStatus = OrderStatus.toDo,
        public id: string = new Date().getTime().toString()
    ) {
    }
}
