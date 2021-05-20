# Airship
A Shopify + Tailwind CSS theme template

## Create new theme from Themekit CLI
$ theme new --password=[your-password] --store=[your-store.myshopify.com] --name=[theme name]

## Build Tailwind CSS files in Shopify assets directory
npx tailwindcss build src/css/application.css -o assets/application.css.liquid

## Deploy newly built files to Shopify store
theme deploy --allow-live

Happy Developing! (∩｀-´)⊃━☆ﾟ.*・｡ﾟ
