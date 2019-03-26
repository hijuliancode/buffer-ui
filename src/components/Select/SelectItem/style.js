/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { grayDarker, gray, grayLight } from '../../style/colors';
import { fontWeightMedium, fontSize } from '../../style/fonts';

export const SelectItemStyled = styled.li`
  min-height: 32px;
  align-items: center;
  color: ${props => (props.disabled ? grayLight : grayDarker)};
  cursor: pointer;
  display: flex;
  font-size: ${fontSize};
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: ${props => (props.hovered ? grayLight : 'transparent')};
  &:hover {
    background-color: ${grayLight};
  }
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

export const SelectItemLabel = styled.div`
  font-size: ${fontSize};
  font-weight: ${fontWeightMedium};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SelectItemIcon = styled.div`
  display: flex;
  padding-right: 8px;
  svg {
    fill: ${props => (props.hovered ? grayDarker : gray)};
  }
  ${SelectItemStyled}:hover & * {
    color: ${grayDarker};
    fill: ${grayDarker};
  }
`;

export const SelectItemTitle = styled.p`
  margin: ${props => (props.moveRight ? '0px 0px 0px 24px' : '0px')};
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  display: block;
  white-space: nowrap;
`;

export const SelectItemCustom = styled.span`
  display: flex;
  align-items: center;
`;

export const CheckIconWrapper = styled.span`
  margin-right: 8px;
  display: inline-block;
  height: 16px;
  width: 16px;
}
`;

export const HotKeyPrompt = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  text-align: justify;
  letter-spacing: -0.233333px;
  color: ${gray};
`;
