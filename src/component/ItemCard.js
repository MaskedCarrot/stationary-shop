import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import React from 'react'

const ItemCard = (props) => {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                height="100"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ₹{props.data.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Quantity {props.data.quantity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}

export default ItemCard
