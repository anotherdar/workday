import { normalizeText } from '../Search/index';

export const isEmpty = <T>(value: Array<T> | Object | string) => {
    switch (typeof value) {
        case 'object': {
            if (Array.isArray(value)) {
                return value.length === 0;
            } else if (value !== null) {
                return Object.keys(value).length === 0;
            }

            return true;
        }
        case 'string': {
            return normalizeText(value).length === 0;
        }
        default: {
            return false;
        }
    }
};
