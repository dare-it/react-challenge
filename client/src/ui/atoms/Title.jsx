import { Box } from '@mui/material';
import * as PropTypes from 'prop-types';
import React from 'react';

export const Title = ({ title }) => {
    return (
        <Box display={'flex'} alignItems={'center'}>
            {title}
        </Box>
    );
};

Title.propTypes = {
    title: PropTypes.string,
};