"use client";

import { useState } from "react";

function Form() {
  // 1) state for the whole form
  const [form, setForm] = useState({
    name: "",
    country: "",
    gender: "",
    hobbies: [], // keep multiple checkbox values in an array
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    console.log(type);
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Complete React Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Name"
            name="name"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Select */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Country</label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="nepal">Nepal</option>
            <option value="usa">USA</option>
          </select>
        </div>

        {/* Radio Buttons */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Gender</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1">
              <input
                // checked={form.gender === "Male"}
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />{" "}
              Male
            </label>

            <label className="flex items-center gap-1">
              <input
                // checked={form.gender === "Female"}
                type="radio"
                name="gender"
                onChange={handleChange}
                value="Female"
              />{" "}
              Female
            </label>
          </div>
        </div>

        {/* Multiple Checkboxes */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Hobbies</label>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-1">
              <input
                onChange={handleChange}
                type="checkbox"
                name="hobbies"
                value="Cricket"
              />{" "}
              Cricket
            </label>

            <label className="flex items-center gap-1">
              <input
                onChange={handleChange}
                type="checkbox"
                name="hobbies"
                value="Football"
              />{" "}
              Football
            </label>

            <label className="flex items-center gap-1">
              <input
                onChange={handleChange}
                type="checkbox"
                name="hobbies"
                value="Gaming"
              />{" "}
              Gaming
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
