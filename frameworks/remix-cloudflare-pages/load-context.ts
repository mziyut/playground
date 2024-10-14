import { type PlatformProxy } from "wrangler";
import { type AppLoadContext } from "@remix-run/cloudflare";
import { PrismaClient } from "@prisma/client";
import { PrismaPg as PrismaPgWorker } from "@prisma/adapter-pg-worker";
import { Pool } from "@prisma/pg-worker";

// When using `wrangler.toml` to configure bindings,
// `wrangler types` will generate types for those bindings
// into the global `Env` interface.
// Need this empty interface so that typechecking passes
// even if no `wrangler.toml` exists.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Env {}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;
declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
    db: PrismaClient;
  }
}

export type GetLoadContext = (args: {
  request: Request;
  context: {
    cloudflare: Cloudflare;
  };
}) => Promise<AppLoadContext>;

export const getLoadContext: GetLoadContext = async ({ context }) => {
  const pool = new Pool({
    connectionString: context.cloudflare.env.DATABASE_URL,
  });
  const adapter = new PrismaPgWorker(pool);
  const db = new PrismaClient({ adapter });
  return {
    cloudflare: context.cloudflare,
    db,
  };
};
