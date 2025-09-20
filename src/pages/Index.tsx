import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { OverviewCards } from "@/components/dashboard/OverviewCards";
import { TrendCharts } from "@/components/dashboard/TrendCharts";
import { InsightsSection } from "@/components/dashboard/InsightsSection";
import { AIRecommendation } from "@/components/dashboard/AIRecommendation";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("AAPL");
  const [lastUpdated, setLastUpdated] = useState("14:36:03");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast({
      title: "Search Updated",
      description: `Now showing data for ${query}`,
    });
  };

  const handleRefresh = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    setLastUpdated(timeString);
    
    toast({
      title: "Dashboard Refreshed",
      description: "All data has been updated with the latest information",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        onSearch={handleSearch}
        onRefresh={handleRefresh}
        searchQuery={searchQuery}
        lastUpdated={lastUpdated}
        nextRefresh="29:38"
      />
      
      <main className="p-6 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-6">Overview</h2>
          <OverviewCards />
        </section>
        
        <TrendCharts />
        
        <InsightsSection />
        
        <AIRecommendation />
      </main>
    </div>
  );
};

export default Index;