import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const BlogPost = ({ posts }) => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         {posts.map((post) => {
            return (
               <div key={post.id}>
                  <img
                     src={`/images/blogposts/${post.image}`}
                     alt={post.title}
                     className="w-full rounded-2xl"
                     loading="lazy"
                  />
                  <div className="flex flex-col justify-between h-[130px]">
                     <div>
                        <div className="flex items-center text-[13px] uppercase text-gray-500 mt-4 mb-1">
                           <p>{post.publishDate}</p>
                           <p className="px-1">/</p>
                           <p>by {post.author}</p>
                        </div>
                        <Link
                           to={`/singleblogpage/${post.id}`}
                           className="block font-semibold hover:text-rose-500 duration-200"
                        >
                           {post.title}
                        </Link>
                     </div>
                     <div className="flex justify-between items-center border-t-2 border-gray-300 pt-2">
                        <p className="uppercase text-[13px] text-rose-500">
                           <span className="text-gray-500">in </span>
                           {post.category}
                        </p>
                        <Link
                           to={`/singleblogpage/${post.id}`}
                           className="flex items-center w-fit capitalize text-sm font-medium hover:text-rose-500 duration-300"
                        >
                           <p>read more</p>
                           <IoIosArrowForward className="w-[25px] text-rose-500 animate-pulse mb-[3px]" />
                        </Link>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default BlogPost;
