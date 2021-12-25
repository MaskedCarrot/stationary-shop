import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import React from 'react'
import '../style/button.css'

const ItemCard = (props) => {

    const userLoggedIn = props.userIsAuth

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
                <Typography variant="body2" color="text.secondary">
                    Price: ₹{props.data.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Quantity {props.data.quantity}
                </Typography>
            </CardContent>
            {
                !userLoggedIn ? 
                (
                    <CardActions>
                        <Button style={{color: 'black', backgroundColor: '#D3D3D3'}}
                        onClick={() => window.location.href='/edititem'} 
                            size="small">
                                Edit
                        </Button>
                    </CardActions>
                ):(
                    <CardActions>
                        {/* <Button size="small">No Edit</Button> */}
                    </CardActions>
                )
            }
        </Card>
    )
}

export default ItemCard
