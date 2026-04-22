import { useForm } from "react-hook-form";

export default function AgentForm({ onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  function submit(data) {
    console.log(data);
    reset();
    onClose();
  }
  function handleReset() {
    reset({
      name: "",
      surname: "",
      email: "",
      number: "",
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className=" w-220 h-195 flex flex-col py-22 px-25 items-center relative bg-white rounded-[10px] shadow-[5px_5px_4px_0px_rgba(0,0,0,0.08)] overflow-hidden">
        <h2 className="justify-start text-slate-900 text-3xl font-medium font-['FiraGO'] mb-15 text-center">
          აგენტის დამატება
        </h2>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-7  ">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="name">სახელი *</label>
              <input
                type="text"
                className={`w-96 h-10 p-2.5 rounded-md outline outline-1 outline-offset-[-1px] ${errors.name ? "outline-red-500" : "outline-slate-500"} inline-flex justify-between items-center`}
                {...register("name", {
                  required: "ველის შევსება სავალდებულოა!!",
                  minLength: {
                    value: 2,
                    message: "სახელი უნდა შედგებოდეს მინიმუმ 2 ასოსგან",
                  },
                  pattern: {
                    value: /^[ა-ჰ\s]+$/,
                    message: "სახელი უნდა შედგებოდეს მხოლოდ ასოებისაგან",
                  },
                })}
              />

              {errors.name ? (
                <p className="text-red-500 font-bold">{errors.name.message}</p>
              ) : (
                <div className="flex items-center ">
                  <img src="./Vector.svg" alt="" />
                  <p>მინიმუმ ორი სიმბოლო</p>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="surname">გვარი *</label>
              <input
                type="text"
                className={`w-96 h-10 p-2.5 rounded-md outline outline-1 outline-offset-[-1px] ${errors.surname ? "outline-red-500" : "outline-slate-500"} inline-flex justify-between items-center`}
                {...register("surname", {
                  required: "ველის შევსება სავალდებულოა!!",
                  minLength: {
                    value: 2,
                    message: "გვარი უნდა შედგებოდეს მინიმუმ 2 ასოსგან",
                  },
                  pattern: {
                    value: /^[ა-ჰ\s]+$/,
                    message: "გვარი უნდა შედგებოდეს მხოლოდ ასოებისაგან",
                  },
                })}
              />
              {errors.surname ? (
                <p className="text-red-500 font-bold">
                  {errors.surname.message}
                </p>
              ) : (
                <div className="flex items-center ">
                  <img src="./Vector.svg" alt="" />
                  <p>მინიმუმ ორი სიმბოლო</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="email">ელ-ფოსტა*</label>
              <input
                type="email"
                className={`w-96 h-10 p-2.5 rounded-md outline outline-1 outline-offset-[-1px] ${errors.email ? "outline-red-500" : "outline-slate-500"} inline-flex justify-between items-center`}
                {...register("email", {
                  required: "ველის შევსება სავალდებულოა!!",
                  // minLength: { value: 2, message: "სახელი უნდა შედგებოდეს მინიმუმ 2 ასოსგან"},
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "შეავსეთ ველი სწორი ფორმატით",
                  },
                })}
              />

              {errors.email ? (
                <p className="text-red-500 font-bold">{errors.email.message}</p>
              ) : (
                <div className="flex items-center ">
                  <img src="./Vector.svg" alt="" />
                  <p>გამოიყენეთ @redberry.ge ფოსტა</p>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="text">ტელეფონის ნომერი *</label>
              <input
                type="text"
                className={`w-96 h-10 p-2.5 rounded-md outline outline-1 outline-offset-[-1px] ${errors.number ? "outline-red-500" : "outline-slate-500"} inline-flex justify-between items-center`}
                {...register("number", {
                  required: "ველის შევსება სავალდებულოა!!",
                  // minLength: { value: 2, message: "გვარი უნდა შედგებოდეს მინიმუმ 2 ასოსგან"},
                  pattern: {
                    value: /^\+?[0-9\s\-]{7,15}$/,
                    message: "ფორმატი: +995 5XXXXXXXX",
                  },
                })}
              />
              {errors.number ? (
                <p className="text-red-500 font-bold">
                  {errors.number.message}
                </p>
              ) : (
                <div className="flex items-center ">
                  <img src="./Vector.svg" alt="" />
                  <p>მხოლოდ რიცხვები</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={onClose}
              className="h-12 px-4 py-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-orange-600 inline-flex justify-center items-center gap-0.5 text-center text-orange-600 text-base font-medium font-['FiraGO'] ml-100 mr-3.75"
            >
              გაუქმება
            </button>
            <button
              type="submit"
              className="h-12 px-4 py-2.5 bg-orange-600 rounded-[10px] inline-flex justify-center items-center gap-0.5 text-center text-white text-base font-medium font-['FiraGO'] mt-23"
            >
              დაამატე აგენტი
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
