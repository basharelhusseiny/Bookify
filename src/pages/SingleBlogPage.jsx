import { blogPosts } from "../data/blogposts";
import { useParams } from "react-router";

const SingleBlogPage = () => {
   const { id } = useParams();
   const blogData = blogPosts.find((post) => post.id === +id);

   return (
      <div className="mt-[110px] -mb-20 max-sm:mb-0">
         <div className="container mx-auto px-5">
            <div className="relative">
               <img
                  src={`/images/blogposts/${blogData.image}`}
                  alt={blogData.title}
                  className="w-full h-[500px] max-sm:h-[200px] object-cover rounded-3xl"
               />
               <div className="relative max-w-[1000px] max-sm:min-w-full mx-auto -top-32 max-sm:top-0 max-md:-top-36 bg-white rounded-3xl p-10 max-sm:p-5">
                  <div>
                     <p className="uppercase text-[13px] max-sm:text-[12px] text-gray-500">
                        <span className="text-rose-500">
                           {blogData.category}{" "}
                        </span>
                        {`/ ${blogData.publishDate} / by ${blogData.author}`}
                     </p>
                     <h3 className="text-3xl max-sm:text-2xl font-bold mt-5 mb-7">
                        {blogData.title}
                     </h3>
                     <p className="text-gray-600 mb-5 text-[15px] max-sm:text-sm tracking-wide">
                        {blogData.content1}
                     </p>
                     <p className="text-gray-600 mb-5 text-[15px] max-sm:text-sm tracking-wide">
                        {blogData.content2}
                     </p>
                     <p className="text-gray-600 mb-5 text-[15px] max-sm:text-sm tracking-wide">
                        {blogData.content3}
                     </p>
                     <div className="flex items-center gap-8 border border-gray-300 rounded-3xl p-5 my-7">
                        <span className="block text-8xl text-rose-500">“</span>
                        <div>
                           <h6 className="text-2xl max-sm:text-xl font-semibold mb-5">
                              “The person, be it gentleman or lady, who has not
                              pleasure in a good novel, must be intolerably
                              stupid.”
                           </h6>
                           <div className="flex items-center text-sm text-gray-600">
                              <span className="block h-[1px] w-[20px] bg-gray-500 mr-2 mb-[3px] max-sm:mb-0"></span>
                              <p>JEAN-LUC PICARD</p>
                           </div>
                        </div>
                     </div>
                     <p className="text-gray-600 mb-5 text-[15px] max-sm:text-sm tracking-wide">
                        {blogData.content4}
                     </p>
                     <p className="text-gray-600 text-[15px] max-sm:text-sm tracking-wide">
                        {blogData.content2}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleBlogPage;
