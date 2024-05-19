import {} from "hono";

type Head = {
	title?: string;
};

declare module "@hono/react-renderer" {
	interface Props {
		title?: string;
	}
}
