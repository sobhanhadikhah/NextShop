function InputPercent({
  field, form, label, type, disabled
}) {
  const { name, value } = field;
  const { errors, touched } = form;
  return (
    <div className="col-span-12 w-full  flex flex-col gap-2 justify-center ">
      <label htmlFor={name} className="text-lg font-semibold ">{label}</label>
      <input
        placeholder={!disabled ? "غیر فعال" : "چند درصد تخفیف؟"}
        disabled={!disabled}
        type={type}
        id={name}
        name={name}
        {...field}
        className="rounded-md border-none px-3 py-2 text-lg bg-gray-100 focus:outline-red-500 focus:border-none focus:ring-0 " />
      {touched[name] && errors[name] ? (
        <div className="error">{errors[name]}</div>
      ) : null}
    </div>
  );
}

export default InputPercent;
