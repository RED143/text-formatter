import React from 'react';
import { Columns } from '../../types/columns';
import { ReactComponent as OneColumnLogo } from '../../static/icons/one-column.svg';
import { ReactComponent as TwoColumnsLogo } from '../../static/icons/two-columns.svg';
import { ReactComponent as ThreeColumnsLogo } from '../../static/icons/three-columns.svg';

interface IconProps {
  name: Columns;
}

const logos = {
  'one-column': <OneColumnLogo />,
  'two-columns': <TwoColumnsLogo />,
  'three-columns': <ThreeColumnsLogo />,
};

const Icon = ({ name }: IconProps) => {
  return logos[name];
};

export default Icon;
