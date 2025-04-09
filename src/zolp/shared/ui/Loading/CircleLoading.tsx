import React, { FC } from 'react';
import { Container } from './CircleLoading.styled';

interface CircleProps {
  color?: string;
  size?: string;
}

const CircleLoading: FC<CircleProps> = ({
  color,
  size = '1em',
}: CircleProps) => {
  return (
    <Container
      width={size}
      height={size}
      color={color}
      viewBox="0 0 74 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 37C0 57.4345 16.5655 74 37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37ZM66.2917 37C66.2917 53.1773 53.1773 66.2917 37 66.2917C20.8227 66.2917 7.70833 53.1773 7.70833 37C7.70833 20.8227 20.8227 7.70833 37 7.70833C53.1773 7.70833 66.2917 20.8227 66.2917 37Z"
        fill="url(#paint0_angular_10261_257881)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_10261_257881"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(37 37) scale(37)"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#0EA5E9" />
        </radialGradient>
      </defs>
    </Container>
  );
};

export default CircleLoading;
