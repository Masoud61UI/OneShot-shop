import { InputItem } from "@/app/lib/definitions";

export default function Inputs({
  label,
  changehandle,
  name,
  type,
  value,
  placeholder,
}: InputItem) {
  return (
    <div>
      <label className="text-sm mb-2 block text-gray-800">{label}</label>
      <div className="relative">
        <input
          onChange={changehandle}
          name={name}
          type={type}
          value={value}
          required
          className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-indigo-400"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
