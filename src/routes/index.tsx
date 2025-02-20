import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';

export const Route = createFileRoute('/')({
  component: () => (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <div className="flex row gap-4">
        <Card>
          <CardContent>
            Characters
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            W-Engines
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            Disk Drives
          </CardContent>
        </Card>
      </div>
    </div>
  ),
});
