import { reactRenderer } from "@hono/react-renderer";
import styles from "../style.css?url";

export default reactRenderer(({ children, title }) => (
	<html lang="jp">
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link href={styles} rel="stylesheet" />
			{import.meta.env.PROD ? (
				<script type="module" src="/static/client.js"></script>
			) : (
				<script type="module" src="/app/client.ts"></script>
			)}
			{title ? <title>{title}</title> : ""}
		</head>
		<body>{children}</body>
	</html>
));
