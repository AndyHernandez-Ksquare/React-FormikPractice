import React from "react";
import { useFormik } from "formik";
type Props = {};
export const Form = (props: Props) => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      userName: "",
      age: 0,
      gender: "",
      feedback: "",
      receive_emails: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <form
      style={{
        margin: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 8,
      }}
      onSubmit={handleSubmit}
    >
      {" "}
      <div>
        {" "}
        <label style={{ marginRight: 8 }} htmlFor="email">
          {" "}
          Email{" "}
        </label>{" "}
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />{" "}
      </div>{" "}
      <div>
        {" "}
        <label style={{ marginRight: 8 }} htmlFor="username">
          {" "}
          Username{" "}
        </label>{" "}
        <input
          placeholder="Firstname Lastname"
          type="text"
          id="username"
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />{" "}
      </div>{" "}
      <div> </div>{" "}
      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          value={values.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dropdown">Gender</label>
        <select
          name="gender"
          id="dropdown"
          value={values.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        {" "}
        <label htmlFor="feedback">Feedback </label>
        <textarea
          value={values.feedback}
          onChange={handleChange}
          name="feedback"
          id="feedback"
          cols={20}
          rows={10}
        ></textarea>
      </div>
      <div>
        <fieldset>
          <legend>Would you like to receive more emails?</legend>
          <section>
            <label htmlFor="emails_yes">Yes </label>
            <input
              id="emails_yes"
              type="radio"
              name="receive_emails"
              value="yes"
              onChange={handleChange}
            />
          </section>
          <section>
            <label htmlFor="emails_no">No </label>
            <input
              id="emails_no"
              type="radio"
              name="receive_emails"
              value="no"
              onChange={handleChange}
            />
          </section>
        </fieldset>
      </div>
      <button type="submit">Submit</button>{" "}
    </form>
  );
};
