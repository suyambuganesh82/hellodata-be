///
/// Copyright © 2024, Kanton Bern
/// All rights reserved.
///
/// Redistribution and use in source and binary forms, with or without
/// modification, are permitted provided that the following conditions are met:
///     * Redistributions of source code must retain the above copyright
///       notice, this list of conditions and the following disclaimer.
///     * Redistributions in binary form must reproduce the above copyright
///       notice, this list of conditions and the following disclaimer in the
///       documentation and/or other materials provided with the distribution.
///     * Neither the name of the <organization> nor the
///       names of its contributors may be used to endorse or promote products
///       derived from this software without specific prior written permission.
///
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
/// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
/// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
/// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
/// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
/// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
/// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
/// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
/// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
/// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
///

import {createAction, props} from "@ngrx/store";
import {PortalRole} from "./portal-roles-management.model";

export enum RolesManagementActionType {
  LOAD_PORTAL_ROLES = '[PORTAL ROLES MANAGEMENT] Load roles',
  LOAD_PORTAL_ROLES_SUCCESS = '[PORTAL ROLES MANAGEMENT] Load roles success',
  OPEN_PORTAL_ROLE_EDITION = '[PORTAL ROLES MANAGEMENT] Open edit role page',
  SAVE_CHANGES_TO_PORTAL_ROLE = '[PORTAL ROLES MANAGEMENT] Save changes to role',
  SAVE_CHANGES_TO_PORTAL_ROLE_SUCCESS = '[PORTAL ROLES MANAGEMENT] Save changes to role success',
  DELETE_PORTAL_ROLE = '[PORTAL ROLES MANAGEMENT] Delete role',
  DELETE_PORTAL_ROLE_SUCCESS = '[PORTAL ROLES MANAGEMENT] Delete role success',
  DELETE_EDITED_PORTAL_ROLE = '[PORTAL ROLES MANAGEMENT] Delete edited role',
  DELETE_EDITED_PORTAL_ROLE_SUCCESS = '[PORTAL ROLES MANAGEMENT] Delete edited role success',
  SHOW_DELETE_PORTAL_ROLE_POP_UP = '[PORTAL ROLES MANAGEMENT] Show Delete role pop up',
  HIDE_DELETE_PORTAL_ROLE_POP_UP = '[PORTAL ROLES MANAGEMENT] Hide Delete role pop up',
  LOAD_PORTAL_ROLE_BY_ID = '[PORTAL ROLES MANAGEMENT] Load role by id',
  LOAD_PORTAL_ROLE_BY_ID_SUCCESS = '[PORTAL ROLES MANAGEMENT] Load role by id success',
}

export const loadPortalRoles = createAction(
  RolesManagementActionType.LOAD_PORTAL_ROLES
);

export const loadPortalRolesSuccess = createAction(
  RolesManagementActionType.LOAD_PORTAL_ROLES_SUCCESS,
  props<{ roles: PortalRole[] }>()
);

export const openPortalRoleEdition = createAction(
  RolesManagementActionType.OPEN_PORTAL_ROLE_EDITION,
  props<{ role: PortalRole }>()
);

export const saveChangesToPortalRole = createAction(
  RolesManagementActionType.SAVE_CHANGES_TO_PORTAL_ROLE,
  props<{ role: PortalRole }>()
);

export const saveChangesToPortalRoleSuccess = createAction(
  RolesManagementActionType.SAVE_CHANGES_TO_PORTAL_ROLE_SUCCESS,
  props<{ role: PortalRole }>()
);

export const deletePortalRole = createAction(
  RolesManagementActionType.DELETE_PORTAL_ROLE
);

export const deletePortalRoleSuccess = createAction(
  RolesManagementActionType.DELETE_PORTAL_ROLE_SUCCESS,
  props<{ role: PortalRole }>()
);

export const deleteEditedPortalRole = createAction(
  RolesManagementActionType.DELETE_EDITED_PORTAL_ROLE
);

export const deleteEditedPortalRoleSuccess = createAction(
  RolesManagementActionType.DELETE_EDITED_PORTAL_ROLE_SUCCESS,
  props<{ name: string }>()
);

export const showDeletePortalRolePopup = createAction(
  RolesManagementActionType.SHOW_DELETE_PORTAL_ROLE_POP_UP,
  props<{ role: PortalRole }>()
);

export const hideDeletePortalRolePopup = createAction(
  RolesManagementActionType.HIDE_DELETE_PORTAL_ROLE_POP_UP
);

export const loadPortalRoleById = createAction(
  RolesManagementActionType.LOAD_PORTAL_ROLE_BY_ID
);

export const loadPortalRoleByIdSuccess = createAction(
  RolesManagementActionType.LOAD_PORTAL_ROLE_BY_ID_SUCCESS,
  props<{ role: PortalRole }>()
);
