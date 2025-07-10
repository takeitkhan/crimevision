
import Link from "next/link";
import { getMenus } from "@/helpers/actions";

const Footer = async () => {
  const data = await getMenus()
  const FooterMenu = data?.items || []


  const baseUrl = process.env.BASE_URL;


  return (
    <footer>
      <div className="py-5 bg-gray-200">
        <div className="container mx-auto px-5">
          <div className="flex justify-center mb-10">
            <div>
              <ul className="flex flex-row flex-wrap align-middle items-center gap-2 ">
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
              </ul>
            </div>
          </div>
          <div className="container justify-center mx-auto text-center">
            <p>
              <span>সম্পাদক ও প্রকাশকঃ </span>
              <strong>মোহাম্মদ মোক্তার হোসেন</strong>,
            </p>
            <p>
              <span>বার্তা সম্পাদকঃ </span>
              <strong>তোফায়েল ইসলাম</strong>, মোবাইলঃ ০১৭১৭-৩৫১৬৭৪
            </p>
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
    </footer>
  );
};

export default Footer;
