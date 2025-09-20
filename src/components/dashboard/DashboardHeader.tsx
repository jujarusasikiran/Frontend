import { Search, RefreshCw, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface DashboardHeaderProps {
  onSearch?: (query: string) => void;
  onRefresh?: () => void;
  searchQuery?: string;
  lastUpdated?: string;
  nextRefresh?: string;
}

export const DashboardHeader = ({
  onSearch,
  onRefresh,
  searchQuery = "AAPL",
  lastUpdated = "14:36:03",
  nextRefresh = "29:38"
}: DashboardHeaderProps) => {
  const [search, setSearch] = useState(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(search);
  };

  return (
    <header className="bg-card border-b border-border p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">
            Real-Time Market Sentiment Dashboard
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search symbol..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-48 bg-input"
              />
            </div>
          </form>
          
          <div className="text-sm text-muted-foreground">
            <span>Updated: {lastUpdated}</span>
            <span className="ml-4">Next refresh: {nextRefresh}</span>
          </div>
          
          <Button 
            onClick={onRefresh}
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>
    </header>
  );
};