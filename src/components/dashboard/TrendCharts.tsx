import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";

// Mock data for sentiment trend
const sentimentData = [
  { date: "8/24", value: 52 },
  { date: "8/26", value: 48 },
  { date: "8/28", value: 55 },
  { date: "8/30", value: 58 },
  { date: "9/1", value: 62 },
  { date: "9/3", value: 68 },
  { date: "9/5", value: 72 },
  { date: "9/7", value: 75 },
  { date: "9/9", value: 78 },
  { date: "9/11", value: 76 },
  { date: "9/13", value: 73 },
  { date: "9/15", value: 71 },
  { date: "9/17", value: 74 },
  { date: "9/19", value: 76 },
  { date: "9/21", value: 68 }
];

// Mock data for mention volume
const volumeData = [
  { date: "8/24", volume: 320 },
  { date: "8/25", volume: 280 },
  { date: "8/26", volume: 450 },
  { date: "8/27", volume: 380 },
  { date: "8/28", volume: 420 },
  { date: "8/29", volume: 390 },
  { date: "8/30", volume: 480 },
  { date: "8/31", volume: 340 },
  { date: "9/1", volume: 360 },
  { date: "9/2", volume: 520 },
  { date: "9/3", volume: 380 },
  { date: "9/4", volume: 420 },
  { date: "9/5", volume: 450 },
  { date: "9/6", volume: 390 },
  { date: "9/7", volume: 480 },
  { date: "9/8", volume: 420 },
  { date: "9/9", volume: 380 },
  { date: "9/10", volume: 540 },
  { date: "9/11", volume: 460 },
  { date: "9/12", volume: 420 },
  { date: "9/13", volume: 380 },
  { date: "9/14", volume: 320 },
  { date: "9/15", volume: 290 },
  { date: "9/16", volume: 340 },
  { date: "9/17", volume: 380 },
  { date: "9/18", volume: 420 },
  { date: "9/19", volume: 360 },
  { date: "9/20", volume: 280 }
];

export const TrendCharts = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Trends</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="metric-card">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Sentiment Trend (30 days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sentimentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--chart-primary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--chart-primary))", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "hsl(var(--chart-primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Mention Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Bar 
                    dataKey="volume" 
                    fill="hsl(var(--chart-positive))"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};