import { useParams } from "react-router";
import { authors } from "../data/authors";
import { books } from "../data/books";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BookCards from "../components/Sliders/BookCards";

const AuthorDetails = () => {
   const { name } = useParams();

   const authorData = authors.find(
      (author) => author.name.toLowerCase() === name.toLowerCase()
   );
   const bookData = books.filter(
      (book) => name.toLowerCase() === book.author.toLowerCase()
   );

   if (!authorData) {
      return (
         <div className="m-[150px] text-4xl max-sm:text-xl font-light uppercase text-center text-red-500">
            Author not found
         </div>
      );
   }
   return (
      <div className="my-[110px] mb-20">
         <div className="container mx-auto px-5">
            {/* Top Section */}
            <section className="flex max-lg:flex-col items-center justify-between gap-10">
               <div className="flex max-md:flex-col flex-[80%] gap-10">
                  <img
                     src={`/images/${authorData.image}`}
                     alt={authorData.name}
                     className="w-[300px] h-[300px] max-md:mx-auto object-cover rounded-2xl"
                     loading="lazy"
                  />
                  <div className="">
                     <h3 className="text-3xl font-semibold mt-2 mb-5">
                        {authorData.name}
                     </h3>
                     <p className="text-[15px] text-gray-500 mb-4">
                        {authorData.bio}
                     </p>
                     <p className="text-[15px] text-gray-500">{authorData.story}</p>
                  </div>
               </div>
               <div className="flex-[20%]">
                  <div className="flex items-end flex-col max-lg:flex-row border-l-2 max-lg:border-0 border-gray-300 max-lg:ml-0 ml-20">
                     <FaFacebookF className="text-blue-500 hover:text-white hover:bg-blue-500 p-2 text-4xl border-2 border-gray-200 rounded-full m-2 duration-200 cursor-pointer" />
                     <FaXTwitter className="hover:text-white hover:bg-black p-2 text-4xl border-2 border-gray-200 rounded-full m-2 duration-200 cursor-pointer" />
                     <FaInstagram className="text-fuchsia-500 hover:text-white hover:bg-fuchsia-500 p-2 text-4xl border-2 border-gray-200 rounded-full m-2 duration-200 cursor-pointer" />
                     <FaGoogle className="hover:text-white hover:bg-black p-2 text-4xl border-2 border-gray-200 rounded-full m-2 duration-200 cursor-pointer" />
                  </div>
               </div>
            </section>
            {/*Bottom Section */}
            <section className="mt-20">
               <div className="container mx-auto">
                  <div className="mb-10 flex items-center justify-between gap-5">
                     <p className="text-3xl max-sm:text-xl max-sm:mx-auto capitalize font-semibold max-sm:border-b-2 max-sm:border-gray-300 max-sm:pb-1">
                        books by {authorData.name}
                     </p>
                     <span className="flex-1 block max-sm:hidden h-[2px] w-full bg-gray-200"></span>
                  </div>
                  {bookData.length > 0 ? (
                     <div className="scrollbar-hide max-sm:overflow-x-auto">
                        <BookCards books={bookData} />
                     </div>
                  ) : (
                     <p className="text-xl font-light max-sm:text-center">
                        {`There are no books available for ${authorData.name} yet.`}
                     </p>
                  )}
               </div>
            </section>
         </div>
      </div>
   );
};

export default AuthorDetails;
