import React, { FC } from "react";
import TopBar from "../menus/TopBar";

const withMenuWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  pageName: string
) => {
  const Component = (props: P) => {
    return (
      <>
        <TopBar pageName={pageName} />
        <WrappedComponent {...props} />
      </>
    );
  };
  return Component;
};

export default withMenuWrapper;
