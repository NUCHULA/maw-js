import { cmdTeamShutdown, cmdTeamList, cmdCleanupZombies } from "../commands/team";
import { cmdTeamCreate, cmdTeamDelete, cmdTeamTaskAdd, cmdTeamTaskUpdate } from "../commands/team-crud";

export async function routeTeam(cmd: string, args: string[]): Promise<boolean> {
  if (cmd === "team" || cmd === "teams") {
    const sub = args[1]?.toLowerCase();
    if (sub === "shutdown" || sub === "down") {
      if (!args[2]) {
        console.error("usage: maw team shutdown <name> [--force]");
        process.exit(1);
      }
      await cmdTeamShutdown(args[2], { force: args.includes("--force") });
    } else if (sub === "create") {
      if (!args[2]) { console.error("usage: maw team create <name> --members scout,keeper --desc \"desc\""); process.exit(1); }
      let members: string[] = [];
      let desc: string | undefined;
      for (let i = 3; i < args.length; i++) {
        if (args[i] === "--members" && args[i + 1]) { members = args[++i].split(","); }
        else if (args[i] === "--desc" && args[i + 1]) { desc = args[++i]; }
      }
      await cmdTeamCreate(args[2], { members, desc });
    } else if (sub === "delete" || sub === "rm") {
      if (!args[2]) { console.error("usage: maw team delete <name>"); process.exit(1); }
      await cmdTeamDelete(args[2]);
    } else if (sub === "task") {
      const teamName = args[2];
      if (!teamName) { console.error("usage: maw team task <team> \"subject\" [--assign agent]"); process.exit(1); }
      const taskSub = args[3]?.toLowerCase();
      if (taskSub === "update" || taskSub === "set") {
        if (!args[4] || !args[5]) { console.error("usage: maw team task <team> update <task-id> <status>"); process.exit(1); }
        await cmdTeamTaskUpdate(teamName, args[4], args[5]);
      } else if (args[3]) {
        let assign: string | undefined;
        for (let i = 4; i < args.length; i++) {
          if (args[i] === "--assign" && args[i + 1]) { assign = args[++i]; }
        }
        await cmdTeamTaskAdd(teamName, args[3], { assign });
      } else {
        console.error("usage: maw team task <team> \"subject\" [--assign agent]");
        process.exit(1);
      }
    } else if (sub === "list" || sub === "ls" || !sub) {
      await cmdTeamList();
    } else {
      console.log(`\x1b[36mmaw team\x1b[0m \u2014 Team management\n`);
      console.log(`  maw team create <name> --members a,b --desc "..."   Create team`);
      console.log(`  maw team ls                                         List teams`);
      console.log(`  maw team delete <name>                              Delete team`);
      console.log(`  maw team task <team> "subject" [--assign agent]     Add task`);
      console.log(`  maw team task <team> update <id> <status>           Update task`);
      console.log(`  maw team shutdown <name> [--force]                  Shutdown team`);
    }
    return true;
  }

  if (cmd === "cleanup") {
    if (args.includes("--zombie-agents") || args.includes("--zombies")) {
      await cmdCleanupZombies({ yes: args.includes("--yes") || args.includes("-y") });
      return true;
    }
    // Don't consume other cleanup subcommands
    return false;
  }

  return false;
}
