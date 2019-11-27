/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { TaskExtensionCommandContribution, TaskExtensionMenuContribution } from './task-extension-contribution';
import { CommandContribution, MenuContribution } from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    bind(CommandContribution).to(TaskExtensionCommandContribution);
    bind(MenuContribution).to(TaskExtensionMenuContribution);
});
