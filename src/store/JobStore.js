export const initialState = {
  jobNextId: 1,
  jobs: []
};

export const jobReducer = (state, action) => {
  switch (action.type) {
    case "set": {
      return {
        jobNextId: action.jobNextId,
        jobs: [...action.jobs]
      };
    }
    case "add": {
      return {
        jobNextId: state.jobNextId + 1,
        jobs: [
          ...state.jobs,
          {
            ...action.newJob,
            status: 0,
            createdAt: Date.now(),
            updatedAt: Date.now()
          }
        ]
      };
    }
    case "start": {
      return {
        jobs: state.jobs.map((job) => {
          return job.id === action.id ? { ...job, status: 1 } : job;
        })
      };
    }
    case "stop": {
      return {
        jobs: state.jobs.map((job) => {
          return job.id === action.id
            ? { ...job, status: 2, updatedAt: Date.now() }
            : job;
        })
      };
    }
    case "remove": {
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.id)
      };
    }
    default:
      return state;
  }
};
