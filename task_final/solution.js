// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    let goods = {title: {}, count: {}};
    let data = {goods: [], order: {}};
    let address= {street, house, entrance, floor, flat};
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {

        data.goods.push(goods[i].title, goods[i].count);
        data.address.push(address[i].street, address[i].house, address[i].entrance, address[i].floor, address[i].flat );
        //data.goods.push{title: [], count: {}};
    }
    data.client =name, phone;
    data.order = data.address + data.sum;
    //data.order.sum = data.client

   // data.client = 'Иван';
    let jsonData = JSON.stringify({data});

    return jsonData;
}
