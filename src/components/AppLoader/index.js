import React from "react";
import dynamic from 'next/dynamic';
import styled from "styled-components";

const StyledAppLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

// Dynamically import Spin to avoid server-side rendering
const DynamicSpin = dynamic(() => import("antd").then((antd) => antd.Spin), {
  ssr: false,
});

const AppLoader = () => {
  return (
    <StyledAppLoader>
      <DynamicSpin />
    </StyledAppLoader>
  );
};

export default AppLoader;
