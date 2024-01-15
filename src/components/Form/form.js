import React from "react";
import "./form.css";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  students: Yup.array().of(
    Yup.object().shape({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      age: Yup.number().required("This field is required"),
    })
  ),
});

const StudentForm = ({ msg }) => {
  return (
    <div className="form">
      <Formik
        initialValues={{
          students: [{ firstName: "", lastName: "", email: "", age: "" }],
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Form Submitted");
        }}
      >
        {(formik) => (
          <Form>
            <FieldArray
              name="students"
              render={(arrayHelper) => {
                return (
                  <div>
                    <h1>{msg}</h1>
                    {formik.values.students.map((student, index) => (
                      <>
                        <div className="mt-2" key={index}>
                          <div className="card" style={{ padding: 5 }}>
                            <div className="card-title">{`Student ${
                              index + 1
                            }`}</div>
                            <div className="card-body">
                              <div className="form-group">
                                <label htmlFor={`students.${index}.firstName`}>
                                  First Name
                                </label>
                                <Field
                                  type="text"
                                  name={`students.${index}.firstName`}
                                  id={`students.${index}.firstName`}
                                  className="form-control"
                                />

                                <ErrorMessage
                                  name={`students.${index}.firstName`}
                                  component="span"
                                  className="text-danger"
                                />
                              </div>
                              <div className="form-group mt-2">
                                <label htmlFor={`students.${index}.lastName`}>
                                  Last Name
                                </label>
                                <Field
                                  type="text"
                                  name={`students.${index}.lastName`}
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name={`students.${index}.lastName`}
                                  component="span"
                                  className="text-danger"
                                />
                              </div>

                              <div className="form-group mt-2">
                                <label htmlFor={`students.${index}.email`}>
                                  Email
                                </label>
                                <Field
                                  type="email"
                                  name={`students.${index}.email`}
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name={`students.${index}.email`}
                                  component="span"
                                  className="text-danger"
                                />
                              </div>

                              <div className="form-group mt-2">
                                <label htmlFor={`students.${index}.age`}>
                                  Age
                                </label>
                                <Field
                                  type="number"
                                  name={`students.${index}.age`}
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name={`students.${index}.age`}
                                  component="span"
                                  className="text-danger"
                                />
                              </div>

                              {index > 0 && (
                                <div className="float-end mt-2">
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => arrayHelper.remove(index)}
                                  >
                                    X
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}

                    <div className="form-group float-end mt-2">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() =>
                          arrayHelper.insert(
                            formik.values.students.length + 1,
                            { firstName: "", lastName: "", email: "", age: "" }
                          )
                        }
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                );
              }}
            />
            <br />
            <br />
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block mt-2">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentForm;
