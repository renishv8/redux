export const loadState = () => {
    try {
        return JSON.parse(localStorage.getItem('data'));
    } catch (err) {
        return undefined;
    }
};

export const saveData = (data) => {
    try {
        localStorage.setItem('data', JSON.stringify(data));
    } catch {
        // ignore write errors
    }
};