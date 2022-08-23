import { css } from 'styled-components';

export const Text: Record<string, any> = {
  setTextStyle: (fontSize: number, fontFamily: string, fontWeight: number) => {
    return css<{ letterSpacing: '0px' | '-0.2px' | '-0.4px' | '-1px' }>`
      ${({ letterSpacing = '0px' }) => {
        const lineHeight = fontSize + 4;

        return `
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          line-height: ${lineHeight}px;
          letter-spacing: ${letterSpacing};
          font-weight: ${fontWeight};
        `;
      }}
    `;
  },
};
