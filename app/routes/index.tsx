import { css } from "hono/css";
import { createRoute } from "honox/factory";
// import Counter from '../islands/counter'
import Chat from "../islands/chat";

export default createRoute(async (c) => {
	const className = await css`
  font-family: sans-serif;
  `;
	const name = c.req.query("name") ?? "Hono";
	return c.render(
		<div className={className}>
			<h1>Hello, {name}!</h1>
			<Chat />
		</div>,
		{ title: name },
	);
});
