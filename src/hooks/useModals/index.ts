import { useModalStore, MODAL_IDS, type ModalNames, type Mode } from '@src/store';

function useModals() {
    const {current, setCurrent} = useModalStore();

    function isVisible() {
        return !!MODAL_IDS.find(id => id.includes(current.id));
    }

    function isEditing() {
        return current.mode === 'edit'
    }

    function setIsVisible(id: ModalNames, mode: Mode = 'create') {
        return () => setCurrent({
            mode,
            id,
        });
    }

    return { isVisible, setIsVisible, current, isEditing };
}

export { useModals };
