import axios from "axios";
import { useState } from "react";

type method = "PUT" | "POST" | "GET" | "DELETE" | "PATCH" ;

interface axiosRequest {
  method: method;
  id?: string
  todo?: string
}

interface loadedData {
  id: string;
  todo: string;
}

const useRequest = () => {
  const [jsonData, setJSONData] = useState<loadedData[]>();

  const url =
    "https://react-http-efc44-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json";

  const sendRequest = async (initSetup: axiosRequest) => {
    if (initSetup.method === "GET") {
      const response = await axios.get(url);
      const responseData = await response.data;

      const loadedData: loadedData[] = [];
      for(const key in responseData) {
          loadedData.push({
            id: key,
            todo: responseData[key].todo
          })
      }

     setJSONData(loadedData);

    } else if (initSetup.method === "POST") {
      const response = await axios.post(url, { todo: initSetup.todo });
      console.log(response.status);
    } else if (initSetup.method === "PATCH") {
        const index = "-N07IXLRZGQX84wmmpqn"
        axios.patch(url, {[index]: {
            todo: "Change from React !!"
        }})
    } else if (initSetup.method === "DELETE") {
      if(initSetup.id !== undefined)
      {
        axios.patch(url, {[initSetup.id]: {}})
      }
    }
  };

  return {
    jsonData,
    sendRequest,
  };
};

export default useRequest;
