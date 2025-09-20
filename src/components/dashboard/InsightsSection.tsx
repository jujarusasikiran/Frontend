import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, TrendingDown, ThumbsUp } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const trendingKeywords = [
  { word: "AAPL", sentiment: "positive", size: "text-2xl" },
  { word: "bullish", sentiment: "positive", size: "text-xl" },
  { word: "growth", sentiment: "positive", size: "text-xl" },
  { word: "earnings", sentiment: "positive", size: "text-lg" },
  { word: "innovation", sentiment: "positive", size: "text-lg" },
  { word: "iPhone", sentiment: "neutral", size: "text-xl" },
  { word: "revenue", sentiment: "positive", size: "text-lg" },
  { word: "market", sentiment: "neutral", size: "text-lg" },
  { word: "technology", sentiment: "positive", size: "text-base" },
  { word: "investment", sentiment: "positive", size: "text-base" },
  { word: "services", sentiment: "positive", size: "text-base" },
  { word: "expansion", sentiment: "positive", size: "text-base" },
  { word: "dividend", sentiment: "positive", size: "text-base" },
  { word: "AI", sentiment: "positive", size: "text-base" },
  { word: "ecosystem", sentiment: "positive", size: "text-base" }
];

const newsItems = [
  {
    title: "Apple Reports Record Q4 Earnings, Beats Wall Street Expectations",
    source: "Reuters",
    time: "Sep 20, 12:35",
    sentiment: 85,
    url: "#"
  },
  {
    title: "Analysts Upgrade AAPL to Strong Buy Following Innovation...",
    source: "Bloomberg",
    time: "Sep 20, 10:35",
    sentiment: 78,
    url: "#"
  },
  {
    title: "Market Volatility Concerns Affect Tech Sector Including Apple",
    source: "CNBC",
    time: "Sep 20, 08:35",
    sentiment: 35,
    url: "#"
  },
  {
    title: "Institutional Investors Increase Apple Holdings by 15%",
    source: "Financial Times",
    time: "Sep 20, 02:35",
    sentiment: 80,
    url: "#"
  }
];

const socialSnippets = [
  {
    text: "backing it up.",
    author: "StockTwits",
    handle: "@ChartMaster",
    time: "Sep 20, 11:35",
    sentiment: 75,
    platform: "StockTwits"
  },
  {
    text: "Concerned about $AAPL's recent performance in emerging markets. Might be time to reassess position size.",
    author: "Reddit",
    handle: "@MarketAnalyst",
    time: "Sep 20, 09:35",
    sentiment: 25,
    platform: "Reddit"
  },
  {
    text: "$AAPL fundamentals still solid despite market noise. Warren Buffett didn't sell for a reason.",
    author: "LinkedIn",
    handle: "@ValueInvestor",
    time: "Sep 20, 07:35",
    sentiment: 82,
    platform: "LinkedIn"
  }
];

export const InsightsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Insights</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        
        {/* Trending Keywords */}
        <Card className="metric-card">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Trending Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {trendingKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className={`${keyword.size} font-medium ${
                    keyword.sentiment === 'positive' 
                      ? 'text-positive' 
                      : keyword.sentiment === 'negative' 
                      ? 'text-negative' 
                      : 'text-neutral'
                  }`}
                >
                  {keyword.word}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* News Feed */}
        <Card className="metric-card">
          <CardHeader>
            <CardTitle className="text-lg font-medium">News Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-80">
              <div className="space-y-4">
                {newsItems.map((item, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-sm font-medium leading-tight hover:text-primary cursor-pointer">
                        {item.title}
                      </h4>
                      <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0 mt-1" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{item.source}</span>
                        <span>•</span>
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.sentiment > 60 ? (
                          <TrendingUp className="h-3 w-3 text-positive" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-negative" />
                        )}
                        <span className={item.sentiment > 60 ? 'text-positive' : 'text-negative'}>
                          {item.sentiment}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Social Snippets */}
        <Card className="metric-card">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Social Snippets</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-80">
              <div className="space-y-4">
                {socialSnippets.map((snippet, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0">
                    <p className="text-sm mb-2 leading-relaxed">{snippet.text}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{snippet.platform}</span>
                        <span>•</span>
                        <span>{snippet.handle}</span>
                        <span>•</span>
                        <span>{snippet.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        <span className={snippet.sentiment > 60 ? 'text-positive' : 'text-negative'}>
                          {snippet.sentiment}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};