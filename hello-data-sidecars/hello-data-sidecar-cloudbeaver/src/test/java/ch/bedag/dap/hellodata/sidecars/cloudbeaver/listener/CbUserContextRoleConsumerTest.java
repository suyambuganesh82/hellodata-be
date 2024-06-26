/*
 * Copyright © 2024, Kanton Bern
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the <organization> nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package ch.bedag.dap.hellodata.sidecars.cloudbeaver.listener;

import ch.bedag.dap.hellodata.commons.sidecars.context.role.HdRoleName;
import ch.bedag.dap.hellodata.commons.sidecars.resources.v1.user.data.UserContextRoleUpdate;
import ch.bedag.dap.hellodata.commons.sidecars.resources.v1.user.data.UserContextRoleUpdate.ContextRole;
import ch.bedag.dap.hellodata.sidecars.cloudbeaver.entities.Role;
import ch.bedag.dap.hellodata.sidecars.cloudbeaver.entities.User;
import ch.bedag.dap.hellodata.sidecars.cloudbeaver.repository.RoleRepository;
import ch.bedag.dap.hellodata.sidecars.cloudbeaver.repository.UserRepository;
import ch.bedag.dap.hellodata.sidecars.cloudbeaver.service.resource.CbUserResourceProviderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CbUserContextRoleConsumerTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private RoleRepository roleRepository;
    @Mock
    private CbUserResourceProviderService userResourceProviderService;
    @Mock
    private User user;
    private CbUserContextRoleConsumer cbUserContextRoleConsumer;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this); // Initializes annotated mocks

        // Initialize your class or mock dependencies here, if needed.
        cbUserContextRoleConsumer = new CbUserContextRoleConsumer(userRepository, roleRepository, userResourceProviderService);
    }

    public static UserContextRoleUpdate createSampleUserContextRoleUpdate() {
        UserContextRoleUpdate userContextRoleUpdate = new UserContextRoleUpdate();
        userContextRoleUpdate.setEmail("hello@hellodata.ch");

        List<ContextRole> contextRoles = new ArrayList<>();

        // Sample ContextRole 1
        ContextRole contextRole1 = new ContextRole();
        contextRole1.setContextKey("context1");
        contextRole1.setParentContextKey(null);
        contextRole1.setRoleName(HdRoleName.HELLODATA_ADMIN);
        contextRoles.add(contextRole1);

        userContextRoleUpdate.setContextRoles(contextRoles);
        return userContextRoleUpdate;
    }

    @Test
    void testMapRoles() {
        // create some roles for given datadomains
        Mockito.when(roleRepository.findAll()).thenReturn(availableRoles("dd01"));

        // Call the method you want to test
        Set<ContextRole> dataDomainContexts = new HashSet<>(createSampleUserContextRoleUpdate().getContextRoles());
        List<Role> newUserRoles = CbUserContextRoleConsumer.mapRoles(user, dataDomainContexts, roleRepository.findAll());

        assertEquals(1, (newUserRoles.size()));
        assertEquals("CB_ADMIN", newUserRoles.get(0).getName());
    }

    /**
     * Create a list of roles for dwh and datamarts for given data domains
     */
    private List<Role> availableRoles(String... dataDomainKeys) {
        List<Role> roles = new ArrayList<>();
        for (String ddkey : dataDomainKeys) {
            roles.add(new Role(ddkey + "_READ_DWH", ddkey.toUpperCase() + "_READ_DWH", true));
            roles.add(new Role(ddkey + "_READ_DM", ddkey.toUpperCase() + "_READ_DM", true));
        }
        roles.add(new Role("admin", "CB_ADMIN"));
        return roles;
    }
}