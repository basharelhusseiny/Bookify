import { useState } from "react";

const GoogleMap = () => {
   const [isLoaded, setIsLoaded] = useState(false);

   return (
      <div className="relative w-full h-[500px] max-md:h-[350px] rounded-xl overflow-hidden">
         {!isLoaded && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-rose-100 z-10">
               <div className="loader"></div>
            </div>
         )}

         <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110449.92141485263!2d31.22430027568506!3d30.033750105574996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fc87e04d9f5%3A0x4c9c83a6d875ba9f!2sCairo%2C+Egypt!5e0!3m2!1sen!2sus!4v1714981800000!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsLoaded(true)}
            className="absolute top-0 left-0 w-full h-full border-0"
         ></iframe>
      </div>
   );
};

export default GoogleMap;
