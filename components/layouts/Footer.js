
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


  return (
    <footer>
      <div className="py-5 bg-gray-200">
        <div className="container mx-auto px-5">
          <div className="flex justify-center mb-10">
            <div>
              <Link href="/">
              <Image
                src={Logo}
                className="w-70"
                alt=" Logo"
                width={250}
                height={200}
              />
            </Link>
            <div className="lg:text-right mt-4 text-center">
              <Link 
              href={facebookLink}
              target="blank"
              className=" px-3 py-1 text-blue-600">
              ফেসবুক পেজ ভিজিট করতে ক্লিক করুন
              </Link>
            </div>
              {/* <ul className="flex flex-row flex-wrap align-middle items-center gap-2 ">
                {FooterMenu?.length > 0 ? (
                  FooterMenu?.map((item, index) => (
                    <li
                      className="border border-slate-400 pt-1 px-5 align-middle"
                      key={index}
                    >
                      <Link href={baseUrl + "/" + item.link}>{item.label}</Link>
                    </li>
                  ))
                ) : (
                  <li></li>
                )}
              </ul> */}
            </div>
          </div>
          <div className="container justify-center mx-auto w-full ">
            <div className=" flex flex-col   text-center">
              <p>
              <p>সম্পাদক ও প্রকাশকঃ </p>
              <strong>মোহাম্মদ মোক্তার হোসেন</strong>,
            </p>
            <p>
              <p>বার্তা সম্পাদকঃ </p>
              <strong>তোফায়েল ইসলাম</strong>
            </p>
            <p>
              <span>মোবাইলঃ </span>
              <strong>০১৭১৭-৩৫১৬৭৪</strong>
            </p>
            </div>
            <div className="text-center">
              <p>
              প্রকাশক কর্তৃক প্রকাশিত। প্রধান কার্যালয়ঃ বাড়ী নং- ৩৫, রোড নং- ১০,
              নবীনগর হাউজিং, মোহাম্মদপুর, ঢাকা -১২০৭ থেকে মুদ্রিত।{" "}
            </p>

            <p>
              মোবাইলঃ ০১৯২৩-৮৪৬৬৬৬ (নিউজ ও বিজ্ঞাপন)। ই-মেইলঃ
              info@crimevision.news
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
