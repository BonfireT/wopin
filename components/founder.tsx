import Image from "next/image";

const Founder = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-zinc-50 py-12 dark:bg-black">
      <div className="relative h-180 w-100 overflow-hidden">
        <Image
          src="/founder.jpg"
          alt="Rev Stella Ebegbuna, Founding President"
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        Rev Stella Ebegbuna (Founding President)
      </p>
    </section>
  );
};

export default Founder;