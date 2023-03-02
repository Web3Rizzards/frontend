import {
  NavigationContainer,
  NavigationLogo,
  NavigationSection,
} from './NavigationStyle';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Web3Button } from "@web3modal/react";

export const YourApp = () => {
  return <Web3Button />;
};

const Navigation = () => {
  const router = useRouter();

  return (
    <>
      <NavigationContainer>
        <NavigationSection />
        <NavigationSection>
        </NavigationSection>
        <NavigationSection>
          <Web3Button />
        </NavigationSection>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
