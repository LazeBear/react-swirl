import { Order, DisplayElement } from './interface';

export function generateOrderArray(arr: Array<any>): Array<Order> {
  return arr.map((_i: any, idx: number) => {
    let order: Order;
    switch (idx) {
      case 0:
        order = Order.CENTER;
        break;
      case 1:
        order = Order.NEXT;
        break;
      case arr.length - 1:
        order = Order.LAST;
        break;
      default:
        order = Order.HIDDEN;
    }
    return order;
  });
}

export function reallocateOrder(
  componentArray: Array<any>,
  orderArray: Array<Order>
): Array<DisplayElement> {
  return componentArray.map((i: any, idx: number) => {
    const order = orderArray[idx];
    return { child: i, order, index: idx };
  });
}

export function rotate(
  oldCenter: number,
  newCenter: number,
  array: Array<any>
) {
  const arrayCopy = [...array];
  while (oldCenter !== newCenter) {
    if (newCenter > oldCenter) {
      const data: any = arrayCopy.pop();
      arrayCopy.unshift(data);
      newCenter--;
    } else {
      const data: any = arrayCopy.shift();
      arrayCopy.push(data);
      newCenter++;
    }
  }
  return arrayCopy;
}
