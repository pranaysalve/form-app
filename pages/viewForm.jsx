import React, { useContext, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { FormContext } from "@/service/formControl.context";
import { dateFormat } from "@/utils/dateFormat";

const ViewForm = () => {
  const { form, isLoading, error, getForm } = useContext(FormContext);
  console.log(form);
  useEffect(() => {
    getForm();
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="p-4 border-collapse">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Name</span>
              <span className="sm:text-left text-right">Email</span>
              <span className="hidden md:grid">Address</span>
              <span className="hidden sm:grid">Created At</span>
            </div>
            <ul>
              {form &&
                form.map((item) => {
                  return (
                    <>
                      {/* <Link key={item._id} href={`viewForm/${item._id}}`}> */}
                      <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <div className="flex">
                          <div className="bg-green-100 p-3 rounded-lg">
                            <FaUser className="text-green-700" />
                          </div>
                          <div className="pl-4">
                            <p className="text-gray-800 font-bold">
                              {item.firstName} {item.lastName}
                            </p>
                            <p className="text-gray-800 text-sm">
                              {dateFormat(item.birthdate)}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 sm:text-left text-right">
                          {item.email}
                        </p>
                        <p className="hidden md:flex">
                          {item.street}, {item.city}, {item.state}
                        </p>
                        <div className="sm:flex hidden justify-between items-center">
                          <p>{dateFormat(item.createdAt)}</p>
                          <BsThreeDotsVertical />
                        </div>
                      </li>

                      {/* </Link> */}
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewForm;
