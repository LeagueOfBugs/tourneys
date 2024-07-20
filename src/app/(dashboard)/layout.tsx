import Layout from "@/components/layout/Layout";
import React from "react";

const layout = ({
  children,
  details,
  schedule,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
  schedule: React.ReactNode;
}) => {
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 grid-rows-[min-content_1fr] gap-2 p-5">
          {/* {children} */}
          {details}
          {schedule}
        </div>
      </Layout>
    </div>
  );
};

export default layout;
