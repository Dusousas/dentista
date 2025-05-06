import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        <title>Espaço Saúde | Clínica Dentista</title>
        <meta name="description" content="Tratamentos odontológicos de qualidade para você sorrir com confiança." />
        <meta name="keywords" content="dentista, clínica odontológica, odontologia, tratamento dentário, limpeza, clareamento, implante, Espaço Saúde, dentista em torrinha, implante" />
        <meta name="author" content="Agencia You on" />

        {/* Open Graph (Facebook, LinkedIn etc.) */}
        <meta property="og:title" content="Espaço Saúde | Clínica Dentista" />
        <meta property="og:description" content="Tratamentos odontológicos de qualidade para você sorrir com confiança." />
        <meta property="og:image" content="/images/og-image.jpg" /> {/* substitua pela imagem real */}
        <meta property="og:url" content="https://www.espacosaude.com.br" /> {/* substitua pela URL real */}
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Espaço Saúde | Clínica Dentista" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Tratamentos odontológicos de qualidade para você sorrir com confiança.." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
