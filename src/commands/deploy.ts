import { Args, Command, Flags } from "@oclif/core";
import * as fs from "fs";
import * as FormData from "form-data";
import * as yaml from "js-yaml";

type PluginDefinition = {
  version: number;
  id: string;
  name: string;
  description: string;
  features: {
    [key: string]: {
      description: string;
      example: string;
      entry: string;
      parameters: {
        [key: string]: {
          description: string;
          type: string;
          required: boolean;
          options?: string[];
        };
      }[];
    };
  };
};

export default class Deploy extends Command {
  static description = "Deploy a plugin to the Atharo platform";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {};

  static args = {
    path: Args.string({
      description: "The directory containing the atharo.yaml file",
      default: "./",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Deploy);
    if (!process.env.ATHARO_TOKEN) {
      this.log("ATHARO_TOKEN environment variable is not set");
      return;
    }

    if (!fs.existsSync(`${args.path}/atharo.yaml`)) {
      this.log("atharo.yaml file not found");
      return;
    }

    const pluginDefinition = yaml.load(
      fs.readFileSync(`${args.path}/atharo.yaml`, "utf8")
    ) as PluginDefinition;

    var form = new FormData();
    form.append("files", fs.createReadStream(`${args.path}/atharo.yaml`));
    for (const { entry } of Object.values(pluginDefinition.features)) {
      if (!fs.existsSync(`${args.path}/${entry}`)) {
        this.log(`Command entrypoint "${entry}" not found`);
        return;
      }
      form.append("files", fs.createReadStream(`${args.path}/${entry}`));
    }

    form.submit("http://localhost:3000/api/developers/deploy");

    this.log("Deploying to Atharo...");
  }
}
