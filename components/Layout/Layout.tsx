import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: any
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;