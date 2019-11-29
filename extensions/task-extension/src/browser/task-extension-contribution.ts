/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { cheTaskSchema, execTaskSchema } from "./task-schema";
import { TaskSchemaUpdater } from "@theia/task/lib/browser";
import { CommonMenus } from "@theia/core/lib/browser";

const AddCheSchemaCommand = {
    id: 'AddCheSchemaCommand',
    label: "Add CHE task schema"
};

const RemoveCheSchemaCommand = {
    id: 'RemoveCheSchemaCommand',
    label: "Remove CHE task schema"
};

const AddExecSchemaCommand = {
    id: 'AddExecSchemaCommand',
    label: "Add Exec task schema"
};

const RemoveExecSchemaCommand = {
    id: 'RemoveExecSchemaCommand',
    label: "Remove Exec task schema"
};

@injectable()
export class TaskExtensionCommandContribution implements CommandContribution {

    @inject(TaskSchemaUpdater)
    protected readonly taskSchemaUpdater: TaskSchemaUpdater;

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(AddCheSchemaCommand, {
            execute: () => this.taskSchemaUpdater.addSubschema(cheTaskSchema)
        });

        registry.registerCommand(RemoveCheSchemaCommand, {
            execute: () => this.taskSchemaUpdater.removeSubschema(cheTaskSchema.$id)
        });

        registry.registerCommand(AddExecSchemaCommand, {
            execute: () => this.taskSchemaUpdater.addSubschema(execTaskSchema)
        });

        registry.registerCommand(RemoveExecSchemaCommand, {
            execute: () => this.taskSchemaUpdater.removeSubschema(execTaskSchema.$id)
        });
    }
}

@injectable()
export class TaskExtensionMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: AddCheSchemaCommand.id,
            label: AddCheSchemaCommand.label
        });

        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: RemoveCheSchemaCommand.id,
            label: RemoveCheSchemaCommand.label
        });

        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: AddExecSchemaCommand.id,
            label: AddExecSchemaCommand.label
        });

        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: RemoveExecSchemaCommand.id,
            label: RemoveExecSchemaCommand.label
        });
    }
}
