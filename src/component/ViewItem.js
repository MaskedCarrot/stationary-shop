import React from 'react'
import Typography from '@mui/material/Typography';

const ViewItem = () => {
    return (
        <div style={{display: 'flex', direction: 'row'}}>
                <img style={{width: '40%', height: '100%' }}src='https://tpgvtkmqfbqgecbnaxre.supabase.in/storage/v1/object/public/images/pens.jpg' />
                <Typography variant='h4'>Fevicol</Typography>
            </div>
    )
}

export default ViewItem
