<template>
  <div>
    <v-app-bar
        app
        :clipped-right="$vuetify.rtl"
        :clipped-left="!$vuetify.rtl"
        color="navbar"
        dense
        class="app-bar"
        elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer/>
      <div class="logo">mopodev admin panel</div>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
               @click="$vuetify.theme.dark = !$vuetify.theme.dark" text small>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <!--        <v-btn-->
        <!--          v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl"-->
        <!--          text-->
        <!--          small-->
        <!--          class="search-btn"-->
        <!--        >-->
        <!--          <v-icon>mdi-magnify</v-icon>-->
        <!--        </v-btn>-->
        <v-btn v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl" text small to="/dashboard">
          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
        <v-menu
            v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
            bottom
            offset-y
            color="navbar"
            min-width="300"
            origin="center center"
            transition="scroll-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn text small v-on="on">
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>Steve Adams</v-list-item-title>
              <v-list-item-avatar min-height="70" min-width="60">
                <v-img
                    min-height="60"
                    min-width="60"
                    src="https://randomuser.me/api/portraits/men/15.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click>
              <v-list-item-title>{{ $t('menuItems.PROFILE') }}</v-list-item-title>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-btn small dark color="danger" @click="logout">{{ $t('menuItems.LOGOUT') }}</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <locale-changer v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl" />
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        :right="$vuetify.rtl"
        clipped
        color="navbar"
        :expand-on-hover="$vuetify.breakpoint.lg"
        app
    >
      <template v-slot:prepend v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-list dense>
          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/15.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Steve Adams</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon medium>mdi-account-outline</v-icon>
              </v-list-item-icon>
                <v-list-item-title style="font-size: 12px">{{ $t('menuItems.PROFILE') }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </template>

      <v-list dense>

        <v-list-item to="dashboard" link v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menuItems.DASHBOARD') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="users" link>
          <v-list-item-action>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menuItems.USERS') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!--        <v-list-group :value="false" prepend-icon="mdi-finance">-->
        <!--          <template v-slot:activator>-->
        <!--            <v-list-item-content>-->
        <!--              <v-list-item-title>{{ $t('menuItems.USERS') }}</v-list-item-title>-->
        <!--            </v-list-item-content>-->
        <!--          </template>-->
        <!--          <v-list-item link @click="$router.push('/invoice')">-->
        <!--            <v-list-item-action>-->
        <!--              <v-icon>mdi-receipt</v-icon>-->
        <!--            </v-list-item-action>-->
        <!--            <v-list-item-content>-->
        <!--              <v-list-item-title>فاکتور‌ها</v-list-item-title>-->
        <!--            </v-list-item-content>-->
        <!--          </v-list-item>-->
        <!--        </v-list-group>-->

        <v-divider/>

        <v-list-item @click="logout" link>
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menuItems.LOGOUT') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-row justify="center" class="mobile-navbar-actions" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-col style="text-align: center">
          <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" text block>
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </v-col>
        <v-col style="text-align: center">
          <locale-changer/>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LocaleChanger from './LocaleChanger.vue'

export default {
  components: {LocaleChanger},
  data: () => ({
    drawer: false,
    scrollPosition: 0,
    topRefresh: true,
    $role: ''
  }),
  methods: {
    logout() {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('$role')
      this.$router.push('/')
    },
  },
}
</script>

<style>
.v-application .headline {
  font-family: "IranYekan" !important;
  font-weight: 400;
}
</style>

<style scoped>
.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.mobile-navbar-actions {
  position: absolute;
  bottom: 40px;
  width: 105%
}
</style>

