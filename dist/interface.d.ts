export declare enum Order {
    CENTER = "center",
    NEXT = "next",
    LAST = "last",
    HIDDEN = "hidden"
}
export interface DisplayElement {
    child: any;
    order: Order;
    index: number;
}
export interface ComponentSettings {
    showDots?: boolean;
    showNav?: boolean;
    autoPlay?: boolean;
    playSpeed?: number;
    pauseOnHover?: boolean;
    children: any[];
}
