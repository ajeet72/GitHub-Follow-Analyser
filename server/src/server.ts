import { Hono } from "hono";
import { string, z } from "zod";
import username from "../../client/src/app/tracker/components/body"
const app = new Hono();

const userSchema = z.object({
  username: z.string(),
});

app.get("/", async (c): Promise<any> => {
  try {
    const followersResponse = await fetch(
      `https://api.github.com/users/${username}/followers`
    );
    if (!followersResponse.ok) {
      throw new Error("Got Error while loading the Details");
    }
    const followers: any = await followersResponse.json();
    const followersData = await followers.map(
      (followers: { login: any }) => followers.login
    );
    return c.json(followersData);
  } catch (error) {
    return c.status(500);
  }
});

app.get("/", async (c) => {
  try {
    const followingRespone = await fetch(
      `https://api.github.com/users/${username}/following`
    );
    if (!followingRespone.ok) {
      throw new Error("Got Error while loading the Follwing Details");
    }
    const following: any = await followingRespone.json();
    const followingData = await following.map(
      (following: { login: any }) => following.login
    );
  } catch (error) {
    return c.status(500);
  }
});
app.post("", (c) => {
  return c.text("display the followers");
});
