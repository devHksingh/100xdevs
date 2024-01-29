import { useEffect, useState } from "react";
import axios from "axios";

export default function useLoading() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://sum-server.100xdevs.com/todos");
        setTodos(response.data.todos);
        setLoading(false);
        // console.log(loading);
        // console.log(todos);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return {
    loading: loading,
    todos: todos,
  };
}
