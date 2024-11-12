import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";



const feedURL = "https://feeds.bbci.co.uk/news/rss.xml";
const parser = new RSSParser({
    customFields: {
        item: [
          ['media:thumbnail', 'thumbnail'],
        ]
    }
});
let newsInfo = [];

const parse = async url =>{
    const feed = await parser.parseURL(url);
    const title = feed.items[0].title;
    const description = feed.items[0].contentSnippet;
    const newsImg = feed.items[0].thumbnail.$.url;

    newsInfo.push(title,description,newsImg);
    
}

parse(feedURL);



let app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send(newsInfo);
})

const server = app.listen("4000", ()=>{
    console.log("listening ...");
})

export default server;