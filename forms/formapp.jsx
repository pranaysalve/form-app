import { useState, useContext, useEffect } from "react";
import { AccountForm } from "./account.form";
import { AddressForm } from "./address.form";
import { useMultistepForm } from "../handler/formStateHandler";
import { UserForm } from "./user.form";
import { FormContext } from "@/service/formControl.context";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  birthdate: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

export default function App() {
  const { form, getForm, postForm } = useContext(FormContext);
  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    getForm();
  }, []);

  function updateFields(fields) {
    console.log({ data });
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    await postForm(data);
  };
  console.log(form && form);

  return (
    <div className=" min-h-screen">
      <div className="relative bg-white border p-8 m-4 border-spacing-4 max-w-lg">
        {/* <div className="bg-gray-100 w-full h-full"> */}
        {/* <div className="p-4 border-collapse"> */}
        <form onSubmit={onSubmit}>
          <div className="absolute top-4 left-4">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="flex flex-1 mt-4 gap-4 justify-end">
            {!isFirstStep && (
              <button
                className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={back}
              >
                Back
              </button>
            )}
            <button
              className="pt-10 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}