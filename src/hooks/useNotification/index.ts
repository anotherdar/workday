import { useNotificationStore } from '@src/store';

export function useNotifications() {
    const { setNotification, notification } = useNotificationStore();


    function dismissNotification() {
        setNotification({
            ...notification,
            action: () => { },
            visible: false,
        });
    }

    function displayNotification(currentNotification: Partial<Notification>) {
        setNotification({
            ...notification,
            ...currentNotification,
        });
    }

    return {
        dismissNotification,
        displayNotification,
    };
}

