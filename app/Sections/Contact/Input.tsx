export default function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-[#f4efe9] p-4 rounded-md outline-none"
    />
  );
}
