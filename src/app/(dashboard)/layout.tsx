import Layout from "@/components/layout/Layout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
};

export default layout;
