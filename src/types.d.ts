type AppRouteNames = 'home' | 'products' | 'workday' | 'sellers' | 'history' | 'detail';

type StackNavigationRoutes = {
    home: undefined;
    history: undefined;
    products: undefined;
    workday: undefined;
    sellers: undefined;
    history: undefined;
    detail: {
        sellerId: string,
        name: string,
    };
};

interface Menu {
    name: string,
    icon: string,
    route: AppRouteNames
}

interface Notification {
    type?: 'success' | 'danger' | 'asking';
    title: string;
    visible: boolean;
    action: () => void;
    cancel: () => void;
}

type WorkdayDetailsParams = {
    sellerId: string
    name: string,
}

type Search<T> = {
    search: T
}