import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { addShow } from "../watchlist/watchListSlice";

const AddShowForm = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const comment = {
      name: values.name,
      rating: values.rating,
      category: values.categories,
      publisher: values.publisher,
      text: values.showText,
    };
    console.log(comment);
    dispatch(addShow(comment));
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Your Own Show
      </button>
      {showModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Your Own Show!</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}

                <Formik
                  initialValues={{
                    name: "",
                    rating: "",
                    cateogry: "",
                    publisher: "",
                    showText: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <div className="space-y-12 sm:space-y-16 bg-white">
                          <div>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                              You got a show you want to add to the list? You
                              can add it here to add to your own list!
                            </p>
                            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                <label
                                  htmlFor="username"
                                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                                >
                                  TV Show Name
                                </label>
                                <div className="mt-2 sm:col-span-2 sm:mt-0">
                                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <Field
                                      type="text"
                                      name="username"
                                      id="username"
                                      autoComplete="username"
                                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                      placeholder="Naruto"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                  <label
                                    htmlFor="rating"
                                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                                  >
                                    TV Rating
                                  </label>
                                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <Field
                                        type="text"
                                        name="rating"
                                        as="select"
                                        id="rating"
                                        autoComplete=""
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="TV-PG"
                                      >
                                        <option>Select...</option>
                                        <option>TV-PG</option>
                                        <option>TV-14</option>
                                        <option>TV-MA</option>
                                      </Field>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                  <label
                                    htmlFor="publisher"
                                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                                  >
                                    Publisher
                                  </label>
                                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <Field
                                        type="text"
                                        name="publisher"
                                        id="publisher"
                                        autoComplete=""
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Aniplex"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                <label
                                  htmlFor="about"
                                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                                >
                                  About
                                </label>
                                <div className="mt-2 sm:col-span-2 sm:mt-0">
                                  <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                  />
                                  <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Write a few sentences about the show you're
                                    adding!
                                  </p>
                                  <div className=" text-right m-5 "></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                 
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(handleSubmit) => setShowModal(false)}
                  >
                    Add Show
                  </button>
                </div>
                </Form>
          </Formik>
          </div>
        </div>
        </div>
        </div>
      ) : null}
    </div>
    
   )
   
};

export default AddShowForm
