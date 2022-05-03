import React, { memo } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { PostsType } from "../home";

export const Posts = memo(({ posts }: {posts: PostsType[]}) => (
  <Grid item xs={12}>
    {posts.map(({ id, title, img }) => (
      <Card key={id} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt="Poor internet connection"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Grid>
));
