import React from 'react'

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography'

const LNMIITWebsite = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {`Visit LNMIIT's officail website `}
            <Link color="inherit" href="https://www.lnmiit.ac.in/">
                here
            </Link>{' '}
        </Typography>
    )
}

export default LNMIITWebsite