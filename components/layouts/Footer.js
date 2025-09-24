
import Link from "next/link";
import { getMenus } from "@/helpers/actions";
import Image from "next/image";
import Logo from "../../public/img/logoPng.png";
import { getMetaValueByMetaName } from "@/helpers/metaHelpers";

const Footer = async ({settings}) => {
  const data = await getMenus()
  const FooterMenu = data?.items || []
  const baseUrl = process.env.BASE_URL;
   const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
   const email = getMetaValueByMetaName(settings, "company_email") || "#";
   const phone = getMetaValueByMetaName(settings, "company_phone") || "০১৯২৩-৮৪৬৬৬৬";
   const phone_2 = getMetaValueByMetaName(settings, "phone_2") || "০১৭১৭-৩৫১৬৭৪ ";
    const footer_content = getMetaValueByMetaName(settings, "footer_content") 
   

  return (
    <footer>
      <div className="py-5 bg-gray-200">
        <div className="container mx-auto px-5">
          <div className="flex justify-center mb-3">
            <div className="">
            <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCrimevision1&tabs&width=340&height=70&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=939424216758050"
                  width="340"
                  height="70"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />

              {/* <Link href="/">
              <Image
                src={Logo}
                className="w-70"
                alt=" Logo"
                width={250}
                height={200}
              />
            </Link> */}
            <div className=" mt-4 text-center">
              <Link 
              href={facebookLink}
              target="blank"
              className=" px-3  text-blue-600">
              ফেসবুক পেইজ ভিজিট করতে ক্লিক করুন
              </Link>
            </div>
           
            </div>
          </div>


           <div className="container justify-center mx-auto w-full ">
           <div
             className=""
               dangerouslySetInnerHTML={{ __html:footer_content }}
             ></div>
          </div>



          {/* <div className="container justify-center mx-auto w-full ">
            <div className=" flex flex-col text-center">
              <div className="md:flex gap-1 justify-center items-center">
              <p>সম্পাদক ও প্রকাশকঃ </p>
              <strong>মোহাম্মদ মোক্তার হোসেন</strong>
            </div>
            <div className="md:flex gap-1 justify-center items-center">
              <p>বার্তা সম্পাদকঃ </p>
              <strong>তোফায়েল ইসলাম</strong>
            </div>
            <div className="md:flex gap-1 justify-center items-center">
              <span>মোবাইলঃ </span>
              <strong>{phone_2}</strong>
            </div>
            </div>
            <div className="text-center">
              <p>
              প্রকাশক কর্তৃক প্রকাশিত। প্রধান কার্যালয়ঃ বাড়ী নং- ৩৫, রোড নং- ১০,
              নবীনগর হাউজিং, মোহাম্মদপুর, ঢাকা -১২০৭ থেকে মুদ্রিত।{" "}
            </p>

            <p>
              মোবাইলঃ {phone} (নিউজ ও বিজ্ঞাপন)
            </p>
            <p className="">
              ই-মেইলঃ { email}
            </p>
           
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
