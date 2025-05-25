import { authors } from "../data/authors";
import { books } from "../data/books";
import PageHeader from "../components/common/PageHeader";
import { Link } from "react-router";

const Authors = () => {
   return (
      <div className="mt-[68px] mb-20">
         <PageHeader title={"Authors"} />
         <div className="container mx-auto px-5 mt-14 max-sm:mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
               {authors.map((author) => {
                  const authorBooks = books.filter(
                     (book) =>
                        book.author.toLowerCase() === author.name.toLowerCase()
                  );
                  return (
                     <div key={author.id} className="text-center">
                        <Link to={`/authordetails/${author.name}`}>
                           <img
                              src={`/images/${author.image}`}
                              alt={author.name}
                              className="w-[100px] h-[100px] mx-auto rounded-2xl object-cover mb-5"
                              loading="lazy"
                           />
                        </Link>
                        <Link
                           to={`/authordetails/${author.name}`}
                           className="block font-semibold mb-1 hover:text-rose-500 duration-200"
                        >
                           <p>{author.name}</p>
                        </Link>
                        <p className="text-sm text-gray-500 capitalize">
                           {authorBooks.length > 0
                              ? `${authorBooks.length} published ${
                                   authorBooks.length === 1 ? "Book" : "Books"
                                }`
                              : `no published books`}
                        </p>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Authors;
