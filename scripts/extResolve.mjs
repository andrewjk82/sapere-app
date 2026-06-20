/**
 * ESM resolve hook: lets Node import the extensionless relative specifiers that
 * curriculumSeeds.js uses (Vite resolves these; bare Node does not). On a
 * "module not found" for a relative './x' import, retry as './x.js'.
 *
 * Registered via: node --import ./scripts/extResolve.mjs <entry>
 */
import { register } from 'node:module';

register('./extResolveHook.mjs', import.meta.url);
