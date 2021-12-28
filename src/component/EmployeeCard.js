import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import React from 'react'
import '../style/EmployeeCard.css'

const EmployeeCard = (props) => {

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
                    Email: {props.data.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Mobile: {props.data.mobile}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Aadhar: {props.data.aadhar}
                </Typography>
            </CardContent>
            {
                !userLoggedIn ? 
                (
                    <CardActions>
                        <Button style={{color: 'black', backgroundColor: '#D3D3D3'}}
                        onClick={() => window.location.href='/editemployee'} 
                            size="small">
                                Edit
                        </Button>
                        <Button style={{color: 'black', backgroundColor: '#7CFC00'}}
                        onClick={() => window.location.href='/deleteemployee'} 
                            size="small">
                                DELETE
                        </Button>
                    </CardActions>
                ):(
                    <CardActions>
                        <Button size="small">No Edit</Button>
                    </CardActions>
                )
            }
        </Card>
	)
}

export default EmployeeCard