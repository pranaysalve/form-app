import { createContext, useEffect, useState } from "react";
import { GetForm, PostForm } from "./formControl.service";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [form, setForm] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getForm = () => {
    setIsLoading(true);
    GetForm()
      .then((res) => {
        setForm(res.data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setForm(null);
        setIsLoading(false);
        setError(err);
      });
  };
  const postForm = (data) => {
    setIsLoading(true);
    PostForm(data)
      .then((res) => {
        setForm(res.data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setForm(null);
        setIsLoading(false);
        setError(err);
      });
  };
  const context = {
    form,
    isLoading,
    error,
    postForm,
    getForm,
  };
  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
};
