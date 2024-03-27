import AdminLayout from "./admin-layout";

const Layout = (props: any) => {
  return <>{props.isAuth ? <AdminLayout /> : null}</>;
};

export default Layout;
