/*
 * Copyright (c) 2011-2013 Lp digital system
 *
 * This file is part of BackBuilder5.
 *
 * BackBuilder5 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * BackBuilder5 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with BackBuilder5. If not, see <http://www.gnu.org/licenses/>.
 */

define(
    ['Core', 'user/views/popin.view'],
    function (Core, PopinView) {
        'use strict';

        var trans = Core.get('trans') || function (value) {return value; };

        Core.ControllerManager.registerController('MainController', {

            appName: 'user',

            config: {},

            /**
             * Initialize of Page Controller
             */
            onInit: function () {
                this.app = Core.get('application.user');
            },

            /**
             * Index action
             * Show the index in the edit contribution toolbar
             */
            indexAction: function () {
                this.popinView = new PopinView();
                this.app.popin = this.popinView;
                Core.ApplicationManager.invokeService('main.main.setTitlePane', trans('user_management'));
                Core.ApplicationManager.invokeService('user.user.index', this.popinView);
                Core.ApplicationManager.invokeService('user.group.index', this.popinView);
            }
        });
    }
);
