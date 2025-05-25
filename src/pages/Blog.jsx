import { blogPosts as posts } from "../data/blogposts";
import PageHeader from "../components/common/PageHeader";
import BlogPost from "../components/BlogPage/BlogPost";

const blog = () => {
   return (
      <div className="mt-[68px]">
         <PageHeader title={"Blog"} />
         <div className="container mx-auto px-5">
            <div className="mt-14 max-sm:mt-12 mb-20">
               <BlogPost posts={posts} />
            </div>
         </div>
      </div>
   );
};

export default blog;
