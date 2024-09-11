type AppRouteNames = 'home' | 'products' | 'workday' | 'sellers' | 'history';

type StackNavigationRoutes = {
    home: undefined;
    history: undefined;
    products: undefined;
    workday: undefined;
    sellers: undefined;
    history: undefined;
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
