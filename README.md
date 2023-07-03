oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g atharo-cli
$ atharo COMMAND
running command...
$ atharo (--version)
atharo-cli/0.0.0 linux-x64 node-v18.16.0
$ atharo --help [COMMAND]
USAGE
  $ atharo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`atharo hello PERSON`](#atharo-hello-person)
* [`atharo hello world`](#atharo-hello-world)
* [`atharo help [COMMANDS]`](#atharo-help-commands)
* [`atharo plugins`](#atharo-plugins)
* [`atharo plugins:install PLUGIN...`](#atharo-pluginsinstall-plugin)
* [`atharo plugins:inspect PLUGIN...`](#atharo-pluginsinspect-plugin)
* [`atharo plugins:install PLUGIN...`](#atharo-pluginsinstall-plugin-1)
* [`atharo plugins:link PLUGIN`](#atharo-pluginslink-plugin)
* [`atharo plugins:uninstall PLUGIN...`](#atharo-pluginsuninstall-plugin)
* [`atharo plugins:uninstall PLUGIN...`](#atharo-pluginsuninstall-plugin-1)
* [`atharo plugins:uninstall PLUGIN...`](#atharo-pluginsuninstall-plugin-2)
* [`atharo plugins update`](#atharo-plugins-update)

## `atharo hello PERSON`

Say hello

```
USAGE
  $ atharo hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/warent/atharo-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `atharo hello world`

Say hello world

```
USAGE
  $ atharo hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ atharo hello world
  hello world! (./src/commands/hello/world.ts)
```

## `atharo help [COMMANDS]`

Display help for atharo.

```
USAGE
  $ atharo help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for atharo.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.10/src/commands/help.ts)_

## `atharo plugins`

List installed plugins.

```
USAGE
  $ atharo plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ atharo plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `atharo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ atharo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ atharo plugins add

EXAMPLES
  $ atharo plugins:install myplugin 

  $ atharo plugins:install https://github.com/someuser/someplugin

  $ atharo plugins:install someuser/someplugin
```

## `atharo plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ atharo plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ atharo plugins:inspect myplugin
```

## `atharo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ atharo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ atharo plugins add

EXAMPLES
  $ atharo plugins:install myplugin 

  $ atharo plugins:install https://github.com/someuser/someplugin

  $ atharo plugins:install someuser/someplugin
```

## `atharo plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ atharo plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ atharo plugins:link myplugin
```

## `atharo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ atharo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ atharo plugins unlink
  $ atharo plugins remove
```

## `atharo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ atharo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ atharo plugins unlink
  $ atharo plugins remove
```

## `atharo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ atharo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ atharo plugins unlink
  $ atharo plugins remove
```

## `atharo plugins update`

Update installed plugins.

```
USAGE
  $ atharo plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
