import { useMutation } from "react-query";
import { PersonData } from "../interfaces/person-data";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const postData = (data: PersonData) => {
  return axios.post("http://localhost:8080/send-data", data)
}

export default function useIdentityMutation() {
  const { mutate, isLoading, isSuccess, isError } = useMutation({
  })
  return {
    mutate,
    isLoading,
    isSuccess,
    isError
  }
}