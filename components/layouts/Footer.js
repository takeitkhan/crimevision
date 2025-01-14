"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axiosInstance from '@/helpers/axiosInstance';
import Image from 'next/image'
import truncate from '@/helpers/truncate';


// ==== images === 
import footerLogo from '../../public/img/logo.jpg'


const Footer = () => {
  const baseUrl = process.env.BASE_URL;
  const [FooterMenu, setFooterMenu] = useState([]);  // Use state to store categories
  const [loading, setLoading] = useState(true);       // Add loading state
  const [error, setError] = useState(null);           // Add error state

  useEffect(() => {
    axiosInstance.get('menus?menu=5')
      .then(response => {
        setFooterMenu(response.data.data.items);  // Update state with API data
        setLoading(false);              // Set loading to false when data is fetched
      })
      .catch(error => {
        setError(error);                // Set error state if request fails
        setLoading(false);              // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return (
      <section className="homeBlock pt-[50px] pb-[80px] px-5">
        <div className="container mx-auto">
          Loading...
        </div>
      </section>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;  // Display error message if there is an error
  }

  return (
    <footer>
      <div className="py-5 bg-gray-200">
        <div className="container mx-auto px-5">
          <div className='flex justify-center mb-10'>
            <div>
              <ul class="flex flex-row flex-wrap align-middle items-center gap-2 ">
                {FooterMenu.length > 0 ? (
                  FooterMenu.map((item, index) => (
                    <li className='border border-slate-400 pt-1 px-5 align-middle' key={index}>
                      <Link href={baseUrl + '/' + item.link}>{item.label}</Link>
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
            
            প্রধান সম্পাদক ও প্রকাশকঃ 
            
            <strong>
            
            মোহাম্মদ মোক্তার হোসেন
            
            </strong>, 
            
            
            সম্পাদকঃ  
            <strong>
            
            তোফায়েল ইসলাম
            
            </strong>,
            
            </p>
            <p>
            
            প্রকাশক কর্তৃক প্রকাশিত।
            প্রধান কার্যালয়ঃ   বাড়ী নং- ৩৫, রোড নং- ১০, নবীনগর হাউজিং, মোহাম্মদপুর, ঢাকা -১২০০ থেকে মুদ্রিত। </p>
            
            
            <p>
            
            মোবাইলঃ ০১৯২৩-৮৪৬৬৬৬ (নিউজ ও বিজ্ঞাপন)। ই-মেইলঃ     info@crimevision.news
            
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
