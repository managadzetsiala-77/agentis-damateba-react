import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: {errors}} = useForm();
  function submit(data) {
    console.log(data);
  }
  return (
    <div className="bg-fuchsia-200 flex flex-col items-center justify-center py-22">
      <div className=" w-220 h-195 flex flex-col py-22 px-25 items-center relative bg-white rounded-[10px] shadow-[5px_5px_4px_0px_rgba(0,0,0,0.08)] overflow-hidden">
        <h2 className="justify-start text-slate-900 text-3xl font-medium font-['FiraGO'] mb-15 text-center">
          აგენტის დამატება
        </h2>
        <form onSubmit={handleSubmit(submit)} className=" ">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="name">სახელი *</label>
              <input
                type="text"
                className="w-96 h-10 p-2.5 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-500 inline-flex justify-between items-center"
                {...register("name", {
                  required: "ველის შევსება სავალდებულოა!!",
                  minLength: { value: 2, message: "სახელი უნდა შედგებოდეს მინიმუმ 2 ასოსგან"},
                  pattern: {
                    value: /^[ა-ჰ\s]+$/,
                    message: "სახელი უნდა შედგებოდეს მხოლოდ ასოებისაგან",
                  },
                })}
              />


              {errors.name ? (<p className="text-red-500 font-bold">{errors.name.message}</p>) : <div className="flex items-center ">
                <img src="./Vector.svg" alt="" />
                <p>მინიმუმ ორი სიმბოლო</p>
              </div>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">გვარი *</label>
              <input
                type="text"
                className="w-96 h-10 p-2.5 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-500 inline-flex justify-between items-center"
              />
              <div className="flex items-center ">
                <img src="./Vector.svg" alt="" />
                <p>მინიმუმ ორი სიმბოლო</p>
              </div>
            </div>
          </div>
          <div>
            <button className="h-12 px-4 py-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-orange-600 inline-flex justify-center items-center gap-0.5 text-center justify-start text-orange-600 text-base font-medium font-['FiraGO']">
              გაუქმება
            </button>
            <button
              type="submit"
              className="h-12 px-4 py-2.5 bg-orange-600 rounded-[10px] inline-flex justify-center items-center gap-0.5 text-center justify-start text-white text-base font-medium font-['FiraGO'] mt-23"
            >
              დაამატე აგენტი
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
