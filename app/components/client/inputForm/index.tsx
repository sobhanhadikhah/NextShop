function Input({
  field, form, label, type
}) {
  const { name, value } = field;
  const { errors, touched } = form;
  return (
    <div className="col-span-12 md:col-span-6 flex flex-col gap-2 justify-center ">
      <label htmlFor={name} className="text-lg font-semibold ">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        {...field}
        className="rounded-md border-none text-lg py-2 px-3 bg-gray-100 focus:outline-red-500 focus:border-none focus:ring-0 " />
      {touched[name] && errors[name] ? (
        <div className="error">{errors[name]}</div>
      ) : null}
    </div>
  );
}

export default Input;
