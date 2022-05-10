

class CurrentUser {
    private username: string;
    constructor() {
        this.username = "";
    }

    getUsername() {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }
}

export const currentUser = new CurrentUser();
