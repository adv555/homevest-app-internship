import clsx from 'clsx';
import React from 'react';
import { config } from './config';

interface TypographyProps {
  type: keyof typeof config;
  className?: string;
  tagName?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ type, className, tagName, children }) => {
  const Tag = (tagName || config[type].defaultTagName) as keyof JSX.IntrinsicElements;
  const predefinedClassName = config[type].className;

  return <Tag className={clsx(predefinedClassName, className)}>{children}</Tag>
}
