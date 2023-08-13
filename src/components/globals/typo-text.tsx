import React from 'react';
import { Typography, type TypographyProps } from '@mui/material';
import { type Variant } from '@mui/material/styles/createTypography';

export type VariantType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'bodyCopyXLHeavy'
  | 'bodyCopyLHeavy'
  | 'bodyCopyLBold'
  | 'bodyCopyMHeavy'
  | 'bodyCopyMBold'
  | 'bodyCopyMMedium'
  | 'bodyCopyMRegular'
  | 'bodyCopySHeavy'
  | 'bodyCopySBold'
  | 'bodyCopySMedium'
  | 'bodyCopySRegular'
  | 'bodyCopyXSBold'
  | 'bodyCopyXSMedium'
  | 'bodyCopyTMedium'
  | 'bodyCopyTBold';

type Props = {
  children: React.ReactNode;
  variant: VariantType;
  component?: React.ElementType;
} & Omit<TypographyProps, 'variant'>;

const variantMapping = {
  heading1: 'heading1',
  heading2: 'heading2',
  heading3: 'heading3',
  heading4: 'heading4',
  heading5: 'heading5',
  heading6: 'heading6',
  bodyCopyXLHeavy: 'bodyCopyXL',
  bodyCopyLHeavy: 'bodyCopyL',
  bodyCopyLBold: 'bodyCopyL',
  bodyCopyMHeavy: 'bodyCopyM',
  bodyCopyMBold: 'bodyCopyM',
  bodyCopyMMedium: 'bodyCopyM',
  bodyCopyMRegular: 'bodyCopyM',
  bodyCopySHeavy: 'bodyCopyS',
  bodyCopySBold: 'bodyCopyS',
  bodyCopySMedium: 'bodyCopyS',
  bodyCopySRegular: 'bodyCopyS',
  bodyCopyXSBold: 'bodyCopyXS',
  bodyCopyXSMedium: 'bodyCopyXS',
  bodyCopyTMedium: 'bodyCopyT',
  bodyCopyTBold: 'bodyCopyT',
};

const weightMapping = {
  heading1: '900',
  heading2: '900',
  heading3: '900',
  heading4: '700',
  heading5: '700',
  heading6: '700',
  bodyCopyXLHeavy: '700',
  bodyCopyLHeavy: '700',
  bodyCopyLBold: '600',
  bodyCopyMHeavy: '700',
  bodyCopyMBold: '600',
  bodyCopyMMedium: '500',
  bodyCopyMRegular: '400',
  bodyCopySHeavy: '700',
  bodyCopySBold: '600',
  bodyCopySMedium: '500',
  bodyCopySRegular: '400',
  bodyCopyXSBold: '600',
  bodyCopyXSMedium: '500',
  bodyCopyTMedium: '500',
  bodyCopyTBold: '700',
};

export const TypoText = ({ variant, children, component = 'span', ...props }: Props) => (
  <Typography
    variant={variantMapping[variant] as Variant}
    style={{ fontWeight: weightMapping[variant] }}
    {...props}
    component={component}
  >
    {children}
  </Typography>
);
