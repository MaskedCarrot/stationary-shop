import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import React from 'react'
import '../style/button.css'
import { supabase } from '../supabaseClient'


const CategoryCard = (props) => {

    const user = supabase.auth.user()
    const userIsAuth = user && user.aud === 'authenticated'

    console.log(userIsAuth)

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
            {
                userIsAuth ? 
                (
                    <CardActions>
                        <Button 
                        onClick={() => window.location.href='/editcategory'} 
                            size="small">
                                Edit
                        </Button>

                        <Button color='error'
                        onClick={() => window.location.href='/deletecategory'} 
                            size="small">
                                Delete
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


export default CategoryCard
