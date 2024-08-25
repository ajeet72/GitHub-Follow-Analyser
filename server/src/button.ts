// import { Hono } from "hono";
// import { z } from "zod";

// const app = new Hono();
// let username:string;
// const userSchema = z.object({
//   username: z.string(),
// });

// app.get("/", async (c) => {
//   const result = userSchema.safeParse(await c.req.json());
//   if (!result.success) {
//     return c.text("User details error", 400); // Send a 400 status for bad request
//   }

//   const { username } = result.data;

//   const responseMessage = `Username received: ${username}`;

//   return c.text(responseMessage);
// });

// export default username;
