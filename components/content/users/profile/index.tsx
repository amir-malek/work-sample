import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

interface ProfileProps {
    user: {
        createdAt: Date,
        name: string,
        avatar: string,
        bio: string,
        id: number
    }
}

export default function Profile({user}: ProfileProps) {
    return (
        <Card sx={{height: '100%'}}>
            <CardActionArea sx={{height: '100%'}}>
                <CardMedia
                    component="img"
                    image={user.avatar}
                    alt={user.name}
                />
                <CardContent sx={{height: '50%'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user.bio}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
