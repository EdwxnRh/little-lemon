import { ErrorMessage, Field } from "formik";

export default function Input(props) {
  const renderError = (message) => <p className="text-red-700">{message}</p>;

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={props.refe}
        >
          {props.label}
        </label>
        <Field
          className="appearance-none disabled:bg-slate-50 block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type={props.type}
          name={props.refe}
          id={props.refe}
          autoComplete={props.auto}
          placeholder={props.placeholder}
          innerRef={props.ref}
        />
        <p hidden={!props.desc} className="text-gray-600 text-xs italic">
          {props.desc}
        </p>
        <ErrorMessage name={props.refe} render={renderError} />
      </div>
    </div>
  );
}
