import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wealthgo-server.onrender.com",
    // baseUrl: "https://werenderalthgo.on.com/",

    // "http://localhost:5000/",
    // process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      let token = localStorage.getItem("persist:root");

      token = JSON.parse(token);
      token = token.token;
      const abc = token.slice(1, -1);
      if (token) {
        headers.set("Authorization", `Bearer ${abc}`);
      }
      return headers;
    },
  }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Users",
    "Customers",
    "UserDashboard",
    "AdminDashboard",
    "Alltickets",
    "Tickets",
    "Alltransactions",
    "Transactions",
    "Investments",
    "Wallets",
    "Balance",
    "Deposits",
    "Withdrawals",
    "Register",
    "ForgotPassword",
    "FogotVerify",
    "Verify",
    "Login",
    "MakeDeposit",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => ({
        url: `users/${id}`,
      }),
      providesTags: ["User"],
    }),
    getUserDashboard: build.query({
      query: (id) => ({
        url: `users/dashboard/${id}`,
      }),
      providesTags: ["UserDashboard"],
    }),
    getAdminDashboard: build.query({
      query: () => ({
        url: "users/dashboard-admin",
      }),
      providesTags: ["AdminDashboard"],
    }),
    getUsers: build.query({
      query: (id) => ({
        url: "users/all",
      }),

      providesTags: ["Users"],
    }),
    getCustomers: build.query({
      query: () => ({
        url: "users/customers",
      }),

      providesTags: ["Users"],
    }),
    getWallets: build.query({
      query: () => ({
        url: "wallet/",
      }),
      providesTags: ["Wallets"],
    }),
    getTickets: build.query({
      query: (id) => ({
        url: `tickets/${id}`,
      }),

      providesTags: ["Tickets"],
    }),
    getAllTickets: build.query({
      query: () => ({
        url: "tickets/all",
      }),

      providesTags: ["Alltickets"],
    }),
    getTransactions: build.query({
      query: (id) => ({
        url: `transactions/${id}`,
      }),
      providesTags: ["Transactions"],
    }),
    getAllTransactions: build.query({
      query: () => ({
        url: `transactions/all`,
      }),
      providesTags: ["Alltransactions"],
    }),
    getUserInvestments: build.query({
      query: (id) => ({
        url: `investments/${id}`,
      }),
      providesTags: ["Investments"],
    }),
    getUserBalance: build.query({
      query: (id) => ({
        url: `users/balance/${id}`,
      }),
      providesTags: ["Balance"],
    }),
    getDeposits: build.query({
      query: (id) => ({
        url: `transactions/deposit/${id}`,
      }),
      providesTags: ["Deposits"],
    }),
    getWithdrawals: build.query({
      query: (id) => ({
        url: `transactions/withdrawals/${id}`,
      }),
      providesTags: ["Withdrawals"],
    }),
    registerUser: build.mutation({
      query: (email) => ({
        url: "auth/signup",
        method: "POST",
        body: email,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Register"],
    }),
    forgotPassword: build.mutation({
      query: (email) => ({
        url: "auth/forgot-password",
        method: "POST",
        body: email,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["ForgotPassword"],
    }),
    forgotVerify: build.mutation({
      query: (payload) => ({
        url: "auth/forgot-password/verify",
        method: "PATCH",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["FogotVerify"],
    }),
    verifyUser: build.mutation({
      query: (payload) => ({
        url: "auth/signup/verify",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Verify"],
    }),
    loginUser: build.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Login"],
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {},
      // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        }
      ) {},
    }),
    adminLogin: build.mutation({
      query: (payload) => ({
        url: "admin/admin-login",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Login"],
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {},
      // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        }
      ) {},
    }),
    deposit: build.mutation({
      query: (id, amount) => ({
        url: `transactions/${id}/deposit`,
        method: "POST",
        body: amount,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["MakeDeposit"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useGetCustomersQuery,
  useGetUserDashboardQuery,
  useGetAdminDashboardQuery,
  useGetTicketsQuery,
  useGetWalletsQuery,
  useGetAllTicketsQuery,
  useGetUserInvestmentsQuery,
  useGetUserBalanceQuery,
  useRegisterUserMutation,
  useForgotPasswordMutation,
  useForgotVerifyMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
  useAdminLoginMutation,
  useGetTransactionsQuery,
  useGetAllTransactionsQuery,
  useGetDepositsQuery,
  useGetWithdrawalsQuery,
  useDepositMutation,
} = api;