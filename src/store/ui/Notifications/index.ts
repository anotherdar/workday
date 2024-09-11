import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
   notification: Notification;
}

type Actions = {
    setNotification: (notification: State['notification']) => void;
}

const notificationStore = create<State & Actions>()(
    immer((set) => ({
        notification: {
            title: 'Estas seguro que quieres completar esta acción?',
            action: () => {},
            cancel: () => set(state => {state.notification.visible = false;}),
            type: 'asking',
            visible: false,
        },
        setNotification: (notification) =>
            set(state => {
                state.notification = notification;
            }),
    }))
);

// Return all the actions inside of the store
function useNotificationStore() {
    return notificationStore((store) => ({ ...store }));
}

export { notificationStore, useNotificationStore };
