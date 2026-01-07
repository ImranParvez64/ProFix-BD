import Input from "./Input";

export default function ContactForm() {
  return (
    <div className="order-1 lg:order-2 bg-white border border-gray-100 rounded-2xl p-10">
      <h3 className="text-3xl font-bold mb-8">Book An Appointment</h3>

      <form className="space-y-6">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />

        <select className="w-full bg-[#f4efe9] p-4 rounded-md outline-none">
          <option>Select Subject</option>
          <option>Electrical Service</option>
          <option>Cleaning Service</option>
        </select>

        <textarea
          rows={5}
          placeholder="Write Message..."
          className="w-full bg-[#f4efe9] p-4 rounded-md outline-none resize-none"
        />

        <button
          type="submit"
          className="bg-[#FDC700] hover:bg-[#fdc600c0] transition px-8 py-4 rounded-sm font-semibold"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}
