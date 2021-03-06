import { injectGlobal } from 'styled-components';
import { normalize, darken } from 'polished';

/* eslint-disable */
injectGlobal`
	${normalize(true)};

	a {
		text-decoration: none;
		color: #668CFF;

		&:hover {
			color: ${darken(0.2, '#668CFF')};
		}

		&:active {
			color: #668CFF;
		}
	}

	body {
		WebkitFontSmoothing: 'antialiased';
		line-height: 1.5;
		font-weight: 400;
		font-size: 1.092rem;
		color: #212529;
		text-align: left;
		background-color: white;
	}

	[tabindex="-1"]:focus {
	  outline: 0 !important;
	}

	h1, h2, h3, h4, h5, h6 {
	  margin-bottom: 0.5rem;
	  font-family: inherit;
	  line-height: 1.25;
	  color: inherit;
	}

	h1, h2, h3 {
		font-weight: 700;
	}

	h4, h4, h6 {
		font-weight: 600;
	}

	h1, .h1 {
	  font-size: 2.5rem;
	}

	h2, .h2 {
	  font-size: 2rem;
	}

	h3, .h3 {
	  font-size: 1.75rem;
	}

	h4, .h4 {
	  font-size: 1.5rem;
	}

	h5, .h5 {
	  font-size: 1.25rem;
	}

	h6, .h6 {
	  font-size: 1rem;
	}

	strong {
		font-weight: 700;
	}

	.pending {
		color: #ececec!important;
		background-color: #ececec!important;
		border-color: #ececec!important;
	}
`;
