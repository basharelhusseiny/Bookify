import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/ContactPage/ContactForm";
import GoogleMap from "../components/ContactPage/GoogleMap";

const Contact = () => {
   const ourBookStore = [
      {
         id: 1,
         place: "Las Vegas",
         address: "3164 N Delaware Rd Milan, Indiana(IN), 47031",
         hotline: "+(84) 2500 888 33",
         email: "support@example.com",
         img: "contact_1.png",
      },
      {
         id: 2,
         place: "New York",
         address: "3164 N Delaware Rd Milan, Indiana(IN), 47031",
         hotline: "+(84) 2500 888 33",
         email: "support@example.com",
         img: "contact_2.png",
      },
      {
         id: 3,
         place: "Los Angeles",
         address: "3164 N Delaware Rd Milan, Indiana(IN), 47031",
         hotline: "+(84) 2500 888 33",
         email: "support@example.com",
         img: "contact_3.png",
      },
   ];

   return (
      <div className="mt-[68px]">
         <PageHeader title={"contact"} />
         <div className="container mx-auto px-5">
            <div className="flex max-md:flex-col gap-14 mt-14 border-b-2 border-gray-300 pb-12">
               <div className="flex-1">
                  <GoogleMap />
               </div>
               <div className="flex-1">
                  <ContactForm />
               </div>
            </div>
            <div className="mt-12">
               <h3 className="text-3xl text-center font-semibold capitalize mb-12">
                  our book store
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {ourBookStore.map((place) => {
                     return (
                        <div key={place.id} className="mx-auto">
                           <div>
                              <img
                                 src={`/images/${place.img}`}
                                 alt={place.place}
                                 loading="lazy"
                              />
                           </div>
                           <div className="[&>p]:text-gray-500 [&>p]:text-[15px] [&>p]:mb-1 mb-5 px-1">
                              <h6 className="text-xl font-semibold mt-5 mb-2">
                                 {place.place}
                              </h6>
                              <p>{place.address}</p>
                              <p>{place.hotline}</p>
                              <p>{place.email}</p>
                           </div>
                           <div className="[&>p]:text-gray-500 [&>p]:text-[15px] [&>p]:mb-1 mb-5 px-1">
                              <h6 className="text-[17px] font-semibold mt-5 mb-2">
                                 Working Hours
                              </h6>
                              <p>Open: 8:00AM – Close: 18:00PM</p>
                              <p>Saturday – Sunday: Close</p>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
