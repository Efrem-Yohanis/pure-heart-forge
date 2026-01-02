import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, Filter, MoreHorizontal, Megaphone, MessageSquare, Gift, RefreshCw, Pause, Play, BarChart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const campaigns = [
  {
    id: 1,
    name: "Festive Season Rewards",
    type: "Incentive",
    segment: "High Value Active",
    channels: ["SMS", "Push"],
    status: "Running",
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    owner: "Sarah M.",
    targeted: 45000,
    delivered: 42300,
  },
  {
    id: 2,
    name: "Win-back December",
    type: "Win-back",
    segment: "Dormant 60 Days",
    channels: ["SMS", "USSD"],
    status: "Running",
    startDate: "2024-01-10",
    endDate: "2024-02-10",
    owner: "John K.",
    targeted: 28000,
    delivered: 25600,
  },
  {
    id: 3,
    name: "New Year Promo",
    type: "Incentive",
    segment: "All Active",
    channels: ["SMS"],
    status: "Completed",
    startDate: "2023-12-30",
    endDate: "2024-01-02",
    owner: "Mary W.",
    targeted: 150000,
    delivered: 148500,
  },
  {
    id: 4,
    name: "Transaction Alert Update",
    type: "Info",
    segment: "All Customers",
    channels: ["SMS"],
    status: "Scheduled",
    startDate: "2024-01-20",
    endDate: "2024-01-20",
    owner: "Peter O.",
    targeted: 2400000,
    delivered: 0,
  },
  {
    id: 5,
    name: "Youth Urban Campaign",
    type: "Incentive",
    segment: "Nairobi Youth",
    channels: ["Push", "Email"],
    status: "Draft",
    startDate: "-",
    endDate: "-",
    owner: "Grace N.",
    targeted: 78000,
    delivered: 0,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Incentive":
      return Gift;
    case "Win-back":
      return RefreshCw;
    case "Info":
      return MessageSquare;
    default:
      return Megaphone;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Running":
      return "bg-success/10 text-success border-success/20";
    case "Completed":
      return "bg-info/10 text-info border-info/20";
    case "Scheduled":
      return "bg-warning/10 text-warning border-warning/20";
    case "Draft":
      return "bg-muted text-muted-foreground border-muted";
    case "Paused":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Campaigns() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Campaigns</h1>
          <p className="text-muted-foreground">Manage and monitor your engagement campaigns</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Campaign
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border p-4 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-success/10">
            <Play className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-2xl font-bold">2</p>
            <p className="text-sm text-muted-foreground">Running</p>
          </div>
        </div>
        <div className="bg-card rounded-xl border p-4 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-warning/10">
            <Megaphone className="w-5 h-5 text-warning" />
          </div>
          <div>
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-muted-foreground">Scheduled</p>
          </div>
        </div>
        <div className="bg-card rounded-xl border p-4 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-info/10">
            <BarChart className="w-5 h-5 text-info" />
          </div>
          <div>
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
        </div>
        <div className="bg-card rounded-xl border p-4 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-muted">
            <MessageSquare className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-muted-foreground">Drafts</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Channel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Channels</SelectItem>
            <SelectItem value="sms">SMS</SelectItem>
            <SelectItem value="ussd">USSD</SelectItem>
            <SelectItem value="push">Push</SelectItem>
            <SelectItem value="email">Email</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Campaign</TableHead>
              <TableHead className="font-semibold">Segment</TableHead>
              <TableHead className="font-semibold">Channels</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Start / End</TableHead>
              <TableHead className="font-semibold">Owner</TableHead>
              <TableHead className="font-semibold text-right">Delivered</TableHead>
              <TableHead className="font-semibold w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => {
              const TypeIcon = getTypeIcon(campaign.type);
              return (
                <TableRow key={campaign.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent">
                        <TypeIcon className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{campaign.name}</p>
                        <p className="text-sm text-muted-foreground">{campaign.type}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{campaign.segment}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {campaign.channels.map((channel) => (
                        <Badge key={channel} variant="secondary" className="text-xs">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={cn("font-medium", getStatusColor(campaign.status))}>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {campaign.startDate} — {campaign.endDate}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{campaign.owner}</TableCell>
                  <TableCell className="text-right">
                    <span className="font-medium">{campaign.delivered.toLocaleString()}</span>
                    <span className="text-muted-foreground"> / {campaign.targeted.toLocaleString()}</span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => navigate(`/campaigns/${campaign.id}`)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart className="w-4 h-4 mr-2" />
                          View Report
                        </DropdownMenuItem>
                        {campaign.status === "Running" && (
                          <DropdownMenuItem>
                            <Pause className="w-4 h-4 mr-2" />
                            Pause
                          </DropdownMenuItem>
                        )}
                        {campaign.status === "Paused" && (
                          <DropdownMenuItem>
                            <Play className="w-4 h-4 mr-2" />
                            Resume
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Cancel Campaign
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
