
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { getMenus, getNewsByCat, getSettings } from "@/helpers/actions";

const Provider = async ({ children }) => {
  const data = await getMenus()
  const settings=await getSettings()
   const shironamNews = await getNewsByCat("শিরোনাম", 10)
  const menus = data?.items

  return (
    <>
      <div>
        <Header menus={menus} settings={settings} shironamNews={shironamNews} />
        <div>{children}</div>
        <Footer settings={settings} />
      </div>
    </>
  );
};

export default Provider;
