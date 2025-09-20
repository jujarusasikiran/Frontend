import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, TrendingUp, AlertTriangle } from "lucide-react";

const analysisPoints = [
  "Strong positive sentiment across news and social media channels (78% positive)",
  "Technical indicators showing bullish momentum with solid support levels",
  "Institutional investor confidence increasing with 15% uptick in holdings",
  "Upcoming earnings report expected to beat analyst expectations"
];

const watchPoints = [
  "Monitor Q1 earnings report scheduled for next week",
  "Track Federal Reserve policy changes and interest rate decisions",
  "Watch for any regulatory developments in the tech sector",
  "Keep eye on iPhone sales data and services revenue growth"
];

export const AIRecommendation = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">AI Recommendation</h2>
      
      <Card className="metric-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle className="text-lg font-medium">AI Recommendation</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Recommendation Badge */}
          <div className="flex items-center justify-between">
            <Button 
              size="lg"
              className="bg-positive hover:bg-positive/90 text-positive-foreground font-bold px-8"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              BUY AAPL
            </Button>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Confidence</div>
              <Badge variant="secondary" className="bg-positive/20 text-positive border-positive/30">
                High
              </Badge>
            </div>
          </div>

          {/* Analysis Section */}
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Analysis
            </h4>
            <ul className="space-y-2">
              {analysisPoints.map((point, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* What to Watch Next */}
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2 text-yellow-400">
              <AlertTriangle className="h-4 w-4" />
              What to Watch Next
            </h4>
            <ul className="space-y-2">
              {watchPoints.map((point, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};