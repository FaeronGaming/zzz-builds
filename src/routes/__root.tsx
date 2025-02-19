import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Separator } from '@/components/ui/separator';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
      </div>
      <Separator className="my-0.5" />
      <Outlet />
      {import.meta.env.PROD && <TanStackRouterDevtools />}
    </>
  ),
});
