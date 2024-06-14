import Link from "next/link";

const Contact = () => {
  return (
    <div className=" px-4">
      <div className="my-6 text-Snow flex flex-col gap-y-5">
        <h1 className="text-lg font-bold">Contact Information</h1>
        <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
          <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <span className="md:text-base">Country:</span>
              <span className="text-LightGray md:text-sm">
                United Arab Emirates
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="md:text-base">City:</span>
              <span className="text-LightGray md:text-sm">Dubai</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="md:text-base">Company:</span>
              <span className="text-LightGray md:text-sm">
                Working as a Freelancer
              </span>
            </div>
          </div>
          <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <span className="md:text-base">Email:</span>
              <span className="text-LightGray text-sm">
                razasabir23@icloud.com
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="md:text-base">Linkedin:</span>
              <span className="text-LightGray text-sm">
                <Link href="https://www.linkedin.com/in/raza-mughal-developer/">
                  Raza Mughal
                </Link>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="md:text-base">Phone:</span>
              <span className="text-LightGray text-sm">
                +92 (320) 0430489 / +971 54 3207229
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
