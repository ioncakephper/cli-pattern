# CLI API Documentation

This document outlines the commands, arguments, and options available in the `cli-pattern` application.

## Global Information

*   **Name:** cli-pattern
*   **Version:** 1.0.0
*   **Description:** A CLI application

## Global Options

*   `-v, --verbose`: Enable verbose logging
*   `-d, --debug`: Enable debugging output
*   `--quiet`: Suppress all non-error output
*   `-c, --config <file>`: Specify config file path

## Commands

### `example <argument>`

An example command.

**Usage:**

```bash
cli-pattern example <argument> [options]
```

**Arguments:**

*   `<argument>`: An example argument. (Required)

**Options:**

*   `-o, --option <value>`: An example option. (Default: `default`)

### `quickly [location]`

A command with an optional argument with a default value.

**Usage:**

```bash
cli-pattern quickly [location] [options]
```

**Arguments:**

*   `[location]`: The location to use. (Optional, Default: `local`)

**Options:**

*   (No specific options defined for this command, only global options apply)

### `sample [optionalArg]`

A sample command with an optional argument and several options.

**Usage:**

```bash
cli-pattern sample [optionalArg] [options]
```

**Arguments:**

*   `[optionalArg]`: An optional argument. (Optional)

**Options:**

*   `--host <host>`: Host name (Default: `localhost`)
*   `-p, --port <port>`: Port number (Default: `8080`)
*   `--protocol <protocol>`: Protocol to use (Default: `http`)
