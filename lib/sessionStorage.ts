const SessionStorageKey = {
    USER: 'USER'
}

function saveUser(userId: number): boolean {
    sessionStorage.setItem(SessionStorageKey.USER, JSON.stringify(userId));
    return true;
}

function getUser(): string | null {
    return JSON.parse(sessionStorage.getItem(SessionStorageKey.USER));
}

function clearUser() {
    sessionStorage.removeItem(SessionStorageKey.USER);
    return true;
}

const userSession = {
    saveUser,
    getUser,
    clearUser
}

export { userSession };