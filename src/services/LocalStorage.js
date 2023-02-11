export function removeItem(itemToRemove) {
    return window.localStorage.removeItem(itemToRemove);

}

export function getItem(item) {
    return window.localStorage.getItem(item);

}

export function addItem(localStorageName, newItem) {
    window.localStorage.setItem(localStorageName, JSON.stringify(newItem));
    console.log(newItem);

}

