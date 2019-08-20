import { Box as ReakitBox } from 'reakit';

import { ParagraphThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalParagraphProps = {
  overrides?: ParagraphThemeConfig;
};
export type ParagraphProps = BoxProps & LocalParagraphProps;

function useProps(props: Partial<ParagraphProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Paragraph,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Paragraph = createComponent<ParagraphProps>(
  props => {
    const paragraph = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: paragraph });
  },
  {
    attach: {
      defaultProps: {
        use: 'p'
      },
      useProps
    },
    themeKey: 'Paragraph'
  }
);
