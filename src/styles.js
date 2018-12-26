import { css } from "emotion";

const brand = "#74D900";

export const title = css`
	color: ${brand};
	font-size: 2em;
	text-align: center;
	white-space: nowrap;
`;

export const box = css`
	position: relative;
	display: inline;
	font-size: 0.75em;
	border: 2px solid ${brand};
	line-height: 1;
	padding: 4px;
	top: -3px;
	border-radius: 4px;
`;

export const normal = css`
	color: inherit;
	max-width: 32em;
	margin: 0 auto;
`;

export const link = css`
	color: inherit;
	font-weight: bold;
	text-decoration: none;
	border-bottom: 1px solid ${brand};

	&:hover {
		text-decoration: none;
		background: ${brand};
	}
`;
