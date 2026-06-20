/**
 * resolve() hook: if a relative specifier without an extension fails to
 * resolve, retry with ".js" appended. Used only by the seed validator so it
 * can load curriculumSeeds.js's Vite-style extensionless imports under Node.
 */
export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (err) {
    if (
      (specifier.startsWith('./') || specifier.startsWith('../')) &&
      !/\.[mc]?js$/.test(specifier) &&
      !/\.json$/.test(specifier)
    ) {
      return nextResolve(specifier + '.js', context);
    }
    throw err;
  }
}
