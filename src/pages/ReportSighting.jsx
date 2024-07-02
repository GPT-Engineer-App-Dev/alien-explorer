import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReportSighting = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Report a Sighting</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a placeholder page for reporting a sighting.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportSighting;