import { Order, DisplayElement } from './interface';
export declare function generateOrderArray(arr: Array<any>): Array<Order>;
export declare function reallocateOrder(componentArray: Array<any>, orderArray: Array<Order>): Array<DisplayElement>;
export declare function rotate(oldCenter: number, newCenter: number, array: Array<any>): any[];
