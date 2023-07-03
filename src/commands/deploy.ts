import { Args, Command, Flags } from "@oclif/core";

export default class Deploy extends Command {
  static description = "Deploy plugin to the Atharo platform";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {};

  static args = {};

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Deploy);
    this.log("Deploying to Atharo...");
  }
}
