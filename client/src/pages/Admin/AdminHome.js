import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column justify-content-center mt-4">
          <h1>
            Welcome <i className="text-success">{user?.name}</i>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
