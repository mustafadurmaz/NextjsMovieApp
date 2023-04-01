import Link from "next/link";
import React from "react";

const MenuItem = ({ menuItem }) => {
  console.log(menuItem);
  return (
    <>
      <Link href={menuItem.url}>{menuItem.name}</Link>
    </>
  );
};

export default MenuItem;
