import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="description"
						content="Kreivc Tempcode using Next.js"
					/>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/highlight.min.js"
						integrity="sha512-z+/WWfyD5tccCukM4VvONpEtLmbAm5LDu7eKiyMQJ9m7OfPEDL7gENyDRL3Yfe8XAuGsS2fS4xSMnl6d30kqGQ=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					></script>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/base16/solarized-dark.min.css"
						integrity="sha512-JPpsArcPmVD/lHCCuZeG6Kx4x2qURRXHXxKYaXYJiKEKaoLOcXKDYqQ4jSeauXbk+U6uZ1UzrGO85y+lpys0Og=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					/>
					<script>hljs.highlightAll();</script>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/5.0.0/autosize.min.js"
						integrity="sha512-zibtOTbkMuTivXGk5b8yJFGLIB1jF90NuV7gwNcVWL3xZx/I1HdkXU2pCZhadsuaS5HMUzabvRqK4WmWeKrwUg=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					></script>
					
					<style>{`
						body {
							background-color: #002b36;
							margin: 0;
						}
					`}</style>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
