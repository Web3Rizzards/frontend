import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  NavigationButtonContainer,
  NavigationIcons,
} from './NavigationButtonStyle';

export enum Icons {
  TWITTER = `TWITTER`,
  DISCORD = `DISCORD`,
}

interface IProps {
  url?: string;
  text?: string;
  icon?: Icons;
  handleClick?: () => void;
}

const SmartLink = (display: string, url: string) => {
  return <Link href={url}>{display}</Link>
};

const NavigationButton: FC<IProps> = ({
  url = ``,
  text = ``,
  icon,
  handleClick,
}) => {
  if (handleClick) {
    return (
      <NavigationButtonContainer onClick={handleClick}>
        {text}
      </NavigationButtonContainer>
    );
  }
  return (
    <NavigationButtonContainer>
      {SmartLink(icon || text, url)}
    </NavigationButtonContainer>
  );
};

export default NavigationButton;
