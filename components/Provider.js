
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { getMenus } from "@/helpers/actions";

const Provider = async ({ children }) => {
  const data = await getMenus()
  const menus = data?.items

  return (
    <>
      <div>
        <Header menus={menus} />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Provider;
