import { generateDotEnv } from "./plugin-dotenv";
import { dumpYaml } from "./plugin-yaml";

/**
 * Render a configuration file
 *
 * @param options
 * @param options.output - The output format (json, yml, env)
 */
export function renderTemplate(
  tree: any,
  options: {
    outputFormat?: string | null;
  },
) {
  if (!options.outputFormat) {
    options.outputFormat = "json";
  }

  if (typeof tree === "string") {
    return tree;
  }

  switch (options.outputFormat) {
    case "json":
      return JSON.stringify(tree, null, 2);
    case "yaml":
    case "yml":
      return dumpYaml(tree);
    case "env":
    default:
      return generateDotEnv(tree);
  }
}
