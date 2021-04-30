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
      <v-spacer />
      <div class="logo">mopodev admin panel</div>
      <v-spacer />
      <v-toolbar-items>
        <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" text small>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-btn
          v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
          text
          small
          class="search-btn"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl" text small to="/charts">
          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
        <v-menu
          v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
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
            <v-list-item @click to="/profile">
              <v-list-item-title>Profile</v-list-item-title>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item>
            <v-list-item @click to="/profile">
              <v-list-item-title>Account setting</v-list-item-title>
              <v-icon>mdi-account-cog-outline</v-icon>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-btn small dark color="danger">Logout</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <locale-changer />
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-divider />
      <div class="pa-4">
        <router-view />
      </div>
    </v-main>

    <v-navigation-drawer
      v-model="drawer"
      :right="$vuetify.rtl"
      clipped
      color="navbar"
      :expand-on-hover="$vuetify.breakpoint.lg"
      app
    >
      <v-list dense>
        <v-list-group :value="false" prepend-icon="mdi-finance">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ $t('menuItems.USERS') }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item link @click="$router.push('/invoice')">
            <v-list-item-action>
              <v-icon>mdi-receipt</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>فاکتور‌ها</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/payment')">
            <v-list-item-action>
              <v-icon>mdi-cash-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>پرداخت‌ها</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/bankAccount')" v-if="$role !== 'customer'">
            <v-list-item-action>
              <v-icon>mdi-bank</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>حساب‌های بانک</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/finance-report')">
            <v-list-item-action>
              <v-icon>mdi-file-chart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>گزارش گیری</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-divider />
        <v-list-item @click="logout" link>
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('menuItems.LOGOUT') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LocaleChanger from './LocaleChanger.vue'
export default {
  components: { LocaleChanger },
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
</style>

