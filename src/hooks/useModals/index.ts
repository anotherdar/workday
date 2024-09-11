import { useModalStore, MODAL_IDS, type ModalNames, type Mode } from '@src/store';

function useModals() {
    const {current, setCurrent} = useModalStore();

    console.log({current});

    function isVisible() {
        return !!MODAL_IDS.find(id => id.includes(current.id));
    }

    function isMode(mode: Mode) {
        return current.mode === mode;
    }

    function setIsVisible(id: ModalNames, mode: Mode = 'create') {
        return () => setCurrent({
            mode,
            id,
        });
    }

    return { isVisible, setIsVisible, current, isMode };
}

export { useModals };
