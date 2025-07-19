import React, { FC } from 'react';
import { SubTitle, Title, TitlesContainer } from './Titles.styled.ts';
import { AlignInputHorizontal } from '../../../lib/constants/align-to-flex.const.ts';

interface Props {
  titleFontSize?: string;
  titleFontWeight?: number;
  title?: React.ReactNode;
  titleUpperCase?: boolean;
  subTitleFontSize?: string;
  subTitleFontWeight?: number;
  subTitle?: React.ReactNode;
  customSubTitle?: React.ReactNode;
  width?: string;
  horizontalAlign?: AlignInputHorizontal;
}
const Titles: FC<Props> = ({
  titleFontSize,
  titleFontWeight,
  titleUpperCase,
  subTitleFontSize,
  subTitleFontWeight,
  title,
  subTitle,
  customSubTitle,
  width = '100%',
  horizontalAlign = 'left',
}) => {
  return (
    <TitlesContainer width={width} horizontalAlign={horizontalAlign}>
      <Title
        className={titleUpperCase ? 'uppercase' : ''}
        fontSize={titleFontSize}
        width="100%"
        fontWeight={titleFontWeight}
      >
        {title}
      </Title>
      {customSubTitle ||
        (subTitle && (
          <SubTitle
            className="cornered-subtitle"
            width="100%"
            fontSize={subTitleFontSize}
            fontWeight={subTitleFontWeight}
          >
            {subTitle}
          </SubTitle>
        ))}
    </TitlesContainer>
  );
};

export default Titles;
