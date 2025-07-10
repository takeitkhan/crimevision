import Link from "next/link";
import truncate from "@/helpers/truncate";

export default function LeadNews({leadNews}) {
  

 
  return (
    <div className="order-1">
      <h3 className="border border-green-800 py-1 text-center text-2xl bg-green-800 text-white rounded-t-md">
        আলোচিত সংবাদ
      </h3>
      <ul className="p-2 border border-green-800 bg-slate-50">
        {leadNews.length > 0 ? (
          leadNews.map((item, index) => (
            <li key={index} className="border-b border-gray-300 py-1">
              <Link href={"/news/" + item.slug}>{truncate(item.name, 40)}</Link>          
            </li>
          ))          
        ) : (
          <li>No featured news available</li>
        )}
      </ul>
    </div>
  );
}
