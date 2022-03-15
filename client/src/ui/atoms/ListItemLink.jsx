import { ListItemButton, ListItemText } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const ListItemLink = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { primary, to, onClick = (_, __) => {}, selectedPathname } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <ListItemButton
      selected={selectedPathname === to}
      component={CustomLink}
      onClick={(event) => onClick(event, to)}
    >
      <ListItemText primary={primary} />
    </ListItemButton>
  );
};
