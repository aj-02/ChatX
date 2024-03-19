import React from "react";
import EmptyState from "../components/EmptyState";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="hidden h-full lg:block lg:pl-80">
      <EmptyState />
    </div>
  );
};

export default page;
