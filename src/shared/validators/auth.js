// services/auth.js
export const getUserDetails = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => !!localStorage.getItem('user');
export const isAdmin = () => {
    const user = getUserDetails();
    return user?.role === 'admin';
};
export const isClient = () => {
    const user = getUserDetails();
    return user?.role === 'customer';
};
