import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import React from 'react'

const CategoryCard = (props) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                height="130"
                image={props.data.image_url}
                alt={props.data.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.data.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}


export default CategoryCard
