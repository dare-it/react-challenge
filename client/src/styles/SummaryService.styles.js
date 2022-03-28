import styled from 'styled-components';
import { theme } from '../theme';

export const StyledChartSection = styled.div`
  background-color: ${theme.palette.background.main};
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

export const StyledBalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const StyledChartContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const StyledLegendContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding: 0;
`;
export const StyledListElement = styled.li`
  list-style: none;
  font-size: 16px;
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    display: inline-block;
    margin-right: 10px;
  }
`;

export const StyledNoResults = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
