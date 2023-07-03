import { Args, Command, Flags } from "@oclif/core";
import * as fs from "fs";

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

    this.log("Deploying to Atharo...");
  }
}
