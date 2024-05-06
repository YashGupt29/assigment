import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [], // List of all jobs
  filteredJobs: [], // List of filtered jobs based on all filters
  filters: {
    role: null,
    numberOfEmployees: null,
    remote: null,
    minimumBasePay: null,
    companyName: null,
    experience: null,
    salary: null,
  },
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    // Action creators to set each filter value
    setRoleFilter: (state, action) => {
      state.filters.role = action.payload;
    },
    setNumberOfEmployeesFilter: (state, action) => {
      state.filters.numberOfEmployees = action.payload;
    },
    setRemoteFilter: (state, action) => {
      state.filters.remote = action.payload;
    },
    setMinimumBasePayFilter: (state, action) => {
      state.filters.minimumBasePay = action.payload;
    },
    setCompanyNameFilter: (state, action) => {
      state.filters.companyName = action.payload;
    },
    setExperienceFilter: (state, action) => {
      state.filters.experience = action.payload;
    },
    setSalaryFilter: (state, action) => {
      state.filters.salary = action.payload;
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    // Reducer to filter jobs based on all applied filters
    filterJobs: (state) => {
      const { jobs, filters } = state;
      const { role, remote, minimumBasePay, companyName, experience, salary } =
        filters;

      state.filteredJobs = jobs.filter((job) => {
        return (
          (!role?.length || role.includes(job.jobRole)) &&
          (!remote ||
            (remote === "Both"
              ? ""
              : remote === "remote"
              ? job.location === "remote"
              : job.location !== "remote")) &&
          (!minimumBasePay || job?.minJdSalary >= minimumBasePay) &&
          (!companyName ||
            job?.companyName
              .toLowerCase()
              .includes(companyName.toLowerCase())) &&
          (!experience ||
            (job?.minExp <= experience && job?.maxExp >= experience)) &&
          (!salary ||
            (job?.minJdSalary <= salary && job?.maxJdSalary >= salary))
        );
      });
    },
  },
});

export const {
  setJobs,
  setRoleFilter,
  setNumberOfEmployeesFilter,
  setRemoteFilter,
  setMinimumBasePayFilter,
  setCompanyNameFilter,
  setExperienceFilter,
  setSalaryFilter,
  filterJobs,
} = jobsSlice.actions;

export default jobsSlice.reducer;
