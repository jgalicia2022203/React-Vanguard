import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/vanguard/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["auth"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const login = async (credentials) => {
  try {
    const response = await API.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Customer API calls
export const createCustomer = async (customerData) => {
  try {
    const response = await API.post("/customers", customerData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCustomerById = async (id) => {
  try {
    const response = await API.get(`/customers/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateCustomer = async (id, customerData) => {
  try {
    const response = await API.put(`/customers/${id}`, customerData);
    return response.data;
  } catch (error) {
    console.error("Update error:", error.response.data);
    throw error.response.data;
  }
};

// Account API calls
export const listAccounts = async () => {
  try {
    const response = await API.get(`/accounts`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAccountById = async (id) => {
  try {
    const response = await API.get(`/accounts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deactivateAccount = async (id) => {
  try {
    const response = await API.patch(`/accounts/deactivate/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const closeAccount = async (id) => {
  try {
    const response = await API.patch(`/accounts/close/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const searchAccounts = async (query) => {
  try {
    const response = await API.get(`/accounts/search?query=${query}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Transaction API calls
export const deposit = async (transactionData) => {
  try {
    const response = await API.post("/transactions/deposit", transactionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const withdraw = async (transactionData) => {
  try {
    const response = await API.post("/transactions/withdraw", transactionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const transfer = async (transactionData) => {
  try {
    const response = await API.post("/transactions/transfer", transactionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const requestCredit = async (transactionData) => {
  try {
    const response = await API.post("/transactions/credit", transactionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const purchaseCart = async () => {
  try {
    const response = await API.post("/transactions/purchase");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getTransactionHistory = async (accountNo) => {
  try {
    const response = await API.get(`/transactions/${accountNo}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


// Product & Service API calls
export const getProducts = async () => {
  try {
    const response = await API.get("/products");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await API.post("/products", productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await API.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await API.put(`/products/${id}`, productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await API.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Cart API calls
export const fetchCartItems = async () => {
  try {
    const response = await API.get("/cart");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addToCart = async (productId) => {
  try {
    const response = await API.post("/products/cart", {
      product_service_id: productId,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Favorite API calls
export const fetchFavorites = async () => {
  try {
    const response = await API.get("/favorites");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteFavorite = async (favoriteId) => {
  try {
    const response = await API.delete(`/favorites/${favoriteId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Settings API calls
export const updateSettings = async (settingsData) => {
  try {
    const response = await API.put("/customers/me", settingsData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
