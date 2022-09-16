import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

type Props = {
    title: string;
    description: string;
    meta?: any[];
}

const HelmetHandler: React.FC<Props> = ({title, description, meta = []}) => {
    return (
        <HelmetProvider>
            <Helmet 
                title = {title}
                htmlAttributes={{ lang: "en" }}
                meta={[
                    { name: `description`, content: description },
                    { property: `og:type`, content: 'website' },
                    { property: `og:url`, content: 'https://www.digitalvichar.com/' },
                    { property: `og:title`, content: title },
                    { property: `og:description`, content: description },
                    { property: `og:site_name`, content: 'ReactSimpleApp'}
                ]}
            />
        </HelmetProvider>
    );
}

export default HelmetHandler;
