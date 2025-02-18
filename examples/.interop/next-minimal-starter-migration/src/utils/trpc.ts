import { createReactQueryHooks } from '@trpc/react-query';
import type { AppRouter } from '../pages/api/trpc/[trpc]';

export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}

export const proxy = trpc.proxy;
