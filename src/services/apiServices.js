import axios from "axios";

export const getJob = async () => {
  const body = {
    limit: 800,
    offset: 0,
  };

  try {
    const { data } = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      body
    );
    return data.jdList;
  } catch (error) {
    console.log(error.message);
  }
};
