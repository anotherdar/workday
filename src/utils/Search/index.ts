export const search = (value: string, query: string) => {
    return normalizeText(value)
        .includes(normalizeText(query));
};

export function normalizeText(text: string) {
    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();
}
