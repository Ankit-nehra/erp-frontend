import { useEffect, useState } from "react";

import axios from "../utils/axiosInstance";
const API = "/admin/sections";

export default function SectionManagement() {

  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadSections();
  }, []);


  const loadSections = async () => {

    try {

      setLoading(true);

      const res = await axios.get(API);

      setSections(res.data.sections || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };



  const addSection = async (e) => {

    e.preventDefault();


    if (!sectionName.trim()) {

      return alert("Enter section name");

    }


    try {

      await axios.post(API, {
        section_name: sectionName.trim().toUpperCase()
      });


      setSectionName("");

      loadSections();


    } catch (error) {


      if (error.response?.status === 409) {

        alert("Section already exists");

      } else {

        alert("Unable to create section");

      }


    }

  };




  const deleteSection = async (id) => {


    if (!window.confirm("Delete this section?")) {
      return;
    }


    try {

      await axios.delete(`${API}/${id}`);

      loadSections();


    } catch (error) {

      console.log(error);

    }

  };



  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="mx-auto max-w-4xl space-y-6">


        {/* Add Section Card */}

        <div className="rounded-xl bg-white shadow-lg p-6">


          <h2 className="text-2xl font-bold text-slate-700 mb-5">
            Section Management
          </h2>



          <form
            onSubmit={addSection}
            className="flex gap-4"
          >


            <input

              type="text"

              value={sectionName}

              onChange={(e) =>
                setSectionName(e.target.value)
              }

              placeholder="Enter Section (A, B, C)"

              className="
                flex-1
                rounded-lg
                border
                border-gray-300
                px-4
                py-2
                outline-none
                focus:border-blue-500
              "

            />



            <button

              type="submit"

              className="
                rounded-lg
                bg-blue-600
                px-6
                py-2
                font-medium
                text-white
                hover:bg-blue-700
              "

            >

              Add Section

            </button>


          </form>


        </div>





        {/* Section List */}

        <div className="rounded-xl bg-white shadow-lg overflow-hidden">


          <div className="border-b px-6 py-4">

            <h3 className="text-xl font-semibold text-slate-700">

              Section List

            </h3>

          </div>




          <div className="overflow-x-auto">


            <table className="w-full">


              <thead className="bg-slate-800 text-white">


                <tr>

                  <th className="px-5 py-3 text-left">
                    #
                  </th>


                  <th className="px-5 py-3 text-left">
                    Section Name
                  </th>


                  <th className="px-5 py-3 text-center">
                    Action
                  </th>


                </tr>


              </thead>





              <tbody>


                {
                  loading ? (

                    <tr>

                      <td
                        colSpan="3"
                        className="py-8 text-center"
                      >

                        Loading...

                      </td>

                    </tr>


                  ) : sections.length === 0 ? (


                    <tr>

                      <td
                        colSpan="3"
                        className="
                          py-8
                          text-center
                          text-gray-500
                        "
                      >

                        No Sections Found

                      </td>

                    </tr>


                  ) : (


                    sections.map((item, index) => (

                      <tr
                        key={item.id}
                        className="
                          border-b
                          hover:bg-gray-50
                        "
                      >


                        <td className="px-5 py-3">

                          {index + 1}

                        </td>




                        <td
                          className="
                            px-5
                            py-3
                            font-medium
                          "
                        >

                          {item.section_name}

                        </td>




                        <td
                          className="
                            px-5
                            py-3
                            text-center
                          "
                        >

                          <button

                            onClick={() =>
                              deleteSection(item.id)
                            }

                            className="
                              rounded-md
                              bg-red-600
                              px-4
                              py-2
                              text-sm
                              text-white
                              hover:bg-red-700
                            "

                          >

                            Delete

                          </button>


                        </td>



                      </tr>


                    ))


                  )

                }


              </tbody>



            </table>


          </div>


        </div>


      </div>


    </div>

  );

}
