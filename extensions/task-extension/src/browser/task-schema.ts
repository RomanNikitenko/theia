/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

const label = {
    type: 'string',
    description: 'A task label'
};

const command = {
    type: 'string',
    description: 'A task command'
};

const previewUrl = {
    type: 'string',
    description: 'A preview url'
};

const target = {
    type: 'object',
    description: 'A target',
    properties: {
        workingDir: {
            type: 'string',
            description: 'working directory'
        },
        component: {
            type: 'string',
            description: 'component for running'
        }
    }
};

const cheTaskType = {
    type: 'string',
    enum: ['che'],
    default: 'che'
};

export const cheTaskSchemaId = 'che://schemas/tasks';

export const cheTaskSchema = {
    $id: cheTaskSchemaId,
    type: 'object',
    required: ['type', 'label', 'command', 'target'],
    properties: {
        type: cheTaskType,
        label: label,
        command: command,
        target: target,
        previewUrl: previewUrl
    },
    additionalProperties: true
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arg = {
    type: 'string',
    description: 'A task command'
};

const exec = {
    type: 'string',
    description: 'A task exec'
};

const execTaskType = {
    type: 'string',
    enum: ['exec'],
    default: 'exec'
};

export const execTaskSchemaId = 'exec://schemas/tasks';

export const execTaskSchema = {
    $id: execTaskSchemaId,
    type: 'object',
    required: ['type', 'label', 'arg', 'exe'],
    properties: {
        type: execTaskType,
        label: label,
        arg: arg,
        exe: exec
    },
    additionalProperties: true
};
