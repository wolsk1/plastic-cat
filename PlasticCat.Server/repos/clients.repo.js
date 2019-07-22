var { ROUTE_CONSTANTS } = require('../route.constants');

const BASE_URL = `${ROUTE_CONSTANTS}/clients`;

module.exports = function initRoutes(app) {
    app.get(BASE_URL, getClients);
}

function getClients(request, response){
    response.send([
       new Client('0001', 'SIA "Gurķis"', undefined, '+37129799290'),
       new Client('0011', 'AS "Zapte"'),
       new Client('0002', 'Zigis', 'Caurums')
    ]);
}

function Client(userId, name, surname, phone, email) {
    return {
        userId,
        name,
        surname,
        phone,
        email
    };
}