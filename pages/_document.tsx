import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="/favicon/site.webmanifest"/>

                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>

                    <meta property='og:title' content='Anti-Car Collective - End car dependence today'/>
                    <meta property='og:description' content='We advocate for a world where one does not need to depend
                        on a car in order to survive, commute, and travel.'
                    />
                    <meta property='og:site_name' content='Anti-car Collective'/>
                    {/* TODO: image */}
                    <meta property='og:image' content=''/>
                    <meta name='theme-color' content='#5566C2'/>
                    <meta name='twitter:card' content='summary_large_image'/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
