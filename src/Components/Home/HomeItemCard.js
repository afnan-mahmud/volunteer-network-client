import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

const HomeItemCard = (props) => {
  const { name, image } = props.event;
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/register?library=${name}`);
  };
  return (
    <>
      <div className="event-box">
        <Card sx={{ width: 250 }}>
          <CardMedia sx={{ height: 200 }} image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleJoin()} size="Large">
              Join
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default HomeItemCard;
