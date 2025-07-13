
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { getMenus, getSettings } from "@/helpers/actions";

const Provider = async ({ children }) => {
  const data = await getMenus()
  const settings=await getSettings()
  const menus = data?.items

  return (
    <>
      <div>
        <Header menus={menus} settings={settings} />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Provider;
