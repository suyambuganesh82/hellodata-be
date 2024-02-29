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
import {DataDomain} from "./my-dashboards.model";
import {SupersetDashboardWithMetadata} from "../start-page/start-page.model";

export enum MyDashboardsActionType {
  LOAD_MY_DASHBOARDS = '[MYDASHBOARDS] Load MYDASHBOARDS',
  LOAD_MY_DASHBOARDS_SUCCESS = '[MYDASHBOARDS] Load MYDASHBOARDS SUCCESS',
  SET_SELECTED_DATA_DOMAIN = '[MYDASHBOARDS] Set selected Data Domain',

  LOAD_AVAILABLE_DATA_DOMAINS = '[MYDASHBOARDS] Load available Data Domains',
  LOAD_AVAILABLE_DATA_DOMAINS_SUCCESS = '[MYDASHBOARDS] Load available Data Domains SUCCESS',

  UPLOAD_DASHBOARDS_FILE = '[MYDASHBOARDS] Upload dashboards file',
  UPLOAD_DASHBOARDS_FILE_SUCCESS = '[MYDASHBOARDS] Upload dashboards file SUCCESS',
}

export const loadMyDashboards = createAction(
  MyDashboardsActionType.LOAD_MY_DASHBOARDS
);

export const loadMyDashboardsSuccess = createAction(
  MyDashboardsActionType.LOAD_MY_DASHBOARDS_SUCCESS,
  props<{ payload: SupersetDashboardWithMetadata[] }>()
);

export const setSelectedDataDomain = createAction(
  MyDashboardsActionType.SET_SELECTED_DATA_DOMAIN,
  props<{ dataDomain: DataDomain }>()
);

export const loadAvailableDataDomains = createAction(
  MyDashboardsActionType.LOAD_AVAILABLE_DATA_DOMAINS
);

export const loadAvailableDataDomainsSuccess = createAction(
  MyDashboardsActionType.LOAD_AVAILABLE_DATA_DOMAINS_SUCCESS,
  props<{ payload: DataDomain[] }>()
);

export const uploadDashboards = createAction(
  MyDashboardsActionType.UPLOAD_DASHBOARDS_FILE,
  props<{ formData: FormData }>()
);

export const uploadDashboardsSuccess = createAction(
  MyDashboardsActionType.UPLOAD_DASHBOARDS_FILE_SUCCESS
);
