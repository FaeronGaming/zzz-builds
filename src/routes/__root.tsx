import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Separator } from '@/components/ui/separator';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex px-8 py-2 space-x-4 items-center">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Separator orientation="vertical" />
        <Link to="/characters" className="[&.active]:font-bold">
          Characters
        </Link>
      </div>
      <Separator className="my-0.5" />
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  ),
});
