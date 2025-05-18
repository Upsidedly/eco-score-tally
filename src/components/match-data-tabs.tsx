import { MatchDataProps } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MatchDataCard } from "./match-data-card";

export function MatchDataTabs(props: MatchDataProps) {
  return (
    <Tabs defaultValue="tab-1" className="items-center">
      <TabsList className="h-auto rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Use Level of 1 Bot
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Use Levels of Alliance Bots
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
      <MatchDataCard useOneLevel={true} {...props} />
      </TabsContent>
      <TabsContent value="tab-2">
      <MatchDataCard useOneLevel={false} {...props} />
      </TabsContent>
    </Tabs>
  );
}
