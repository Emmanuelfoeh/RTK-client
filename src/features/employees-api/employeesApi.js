import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8088/api/v1/employees";

export const employeesApiSlice = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (buildQueries) => ({
    getEmployees: buildQueries.query({
      query: () => "",
    }),

    addNewEmployee: buildQueries.mutation({
      query: (employee) => ({
        url: "",
        method: "POST",
        body: employee,
      }),
    }),
    updateEmployee: buildQueries.mutation({
        query: ({id,...employee}) =>({
            url:`/${id}`,
            method: "PUT",
            body: employee,
        })
    }),
  }),
});

export const { useGetEmployeesQuery, useAddNewEmployeeMutation,useUpdateEmployeeMutation } =
  employeesApiSlice;
