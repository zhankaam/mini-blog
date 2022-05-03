import { ChangeEvent, useState } from "react";
import { Grid, Container, Button, Box, TextField } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { v1 } from "uuid";
import { Posts } from "../posts";

export type PostsType = {
  id: string;
  title: string;
  img: string;
};

const Home = () => {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState("");

  const onTweetChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTweet(e.currentTarget.value);

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      setImage(URL.createObjectURL(e.currentTarget.files![0]));
    }
  };

  const onPostCreate = (newTweetTitle: string, image: string) => {
    const post = { id: v1(), title: newTweetTitle, img: image };
    setPosts([...posts, post]);
    setTweet("");
    setImage("");
  };

  return (
    <Container maxWidth="sm" sx={{ padding: (theme) => theme.spacing(3) }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            placeholder="What's happening?"
            variant="standard"
            value={tweet}
            onChange={onTweetChange}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 2 }}>
            <Box>
              <TextField
                id="file"
                type="file"
                onChange={onMainPhotoSelected}
                sx={{ display: "none" }}
              />
              <label htmlFor="file">
                <AddPhotoAlternateIcon color="primary" />
              </label>
            </Box>

            <Button
              variant="contained"
              sx={{ borderRadius: 50 }}
              onClick={() => onPostCreate(tweet, image)}
            >
              Tweet
            </Button>
          </Box>
        </Grid>
        <Posts posts={posts} />
      </Grid>
    </Container>
  );
};

export default Home;
