import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Star, Zap } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  trend?: "up" | "down";
  subtitle?: string;
  positive?: number;
  negative?: number;
  impact?: "High" | "Medium" | "Low";
  rating?: number;
}

const MetricCard = ({ 
  title, 
  value, 
  icon, 
  trend, 
  subtitle, 
  positive, 
  negative, 
  impact,
  rating 
}: MetricCardProps) => (
  <Card className="metric-card">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <div className="flex items-center gap-2">
        {icon}
        {trend && (
          <TrendingUp 
            className={`h-4 w-4 ${trend === 'up' ? 'trend-up' : 'trend-down'}`} 
          />
        )}
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-baseline gap-2 mb-2">
        <div className="text-3xl font-bold text-positive">{value}</div>
        {rating && (
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-muted-foreground">({rating}/5)</span>
          </div>
        )}
      </div>
      
      {subtitle && (
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      )}
      
      {positive !== undefined && negative !== undefined && (
        <div className="flex gap-4 mt-3 text-sm">
          <div className="sentiment-positive">
            Positive: {positive.toFixed(1)}%
          </div>
          <div className="sentiment-negative">
            Negative: {negative.toFixed(1)}%
          </div>
        </div>
      )}
      
      {impact && (
        <div className="mt-3">
          <span className="text-sm text-muted-foreground mr-2">Impact:</span>
          <span className={`text-sm font-medium ${
            impact === 'High' ? 'text-negative' : 
            impact === 'Medium' ? 'text-yellow-400' : 'text-positive'
          }`}>
            {impact}
          </span>
        </div>
      )}
    </CardContent>
  </Card>
);

export const OverviewCards = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Overall Sentiment"
        value="80.9%"
        icon={<TrendingUp className="h-4 w-4 text-positive" />}
        trend="up"
        rating={4.2}
      />
      
      <MetricCard
        title="News Sentiment"
        value="74.0%"
        icon={<TrendingUp className="h-4 w-4 text-positive" />}
        trend="up"
        positive={74.0}
        negative={26.0}
      />
      
      <MetricCard
        title="Social Media Sentiment"
        value="68.0%"
        icon={<TrendingUp className="h-4 w-4 text-positive" />}
        trend="up"
        positive={68.0}
        negative={32.0}
      />
      
      <MetricCard
        title="Economic Events"
        value="85.0%"
        icon={<Zap className="h-4 w-4 text-primary" />}
        trend="up"
        impact="High"
      />
    </section>
  );
};