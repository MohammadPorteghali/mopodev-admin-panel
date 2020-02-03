<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <template>
            <v-card>

                <!--large and Xlarge media drawer started here-->

                <v-navigation-drawer
                    style="border-radius: 0 !important;"
                    v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                    mini-variant
                    :right="rtlDrawer"
                    expand-on-hover
                    permanent
                    app
                >
                    <template v-slot:prepend>
                        <v-list>
                            <v-list-item style="height: 20px !important;">
                                <v-list-item-avatar>
                                    <v-img
                                        src="https://randomuser.me/api/portraits/men/15.jpg"
                                    ></v-img>
                                </v-list-item-avatar>
                                <v-list-item class="mr-3">Steve Adams</v-list-item>
                            </v-list-item>
                        </v-list>
                    </template>

                    <v-divider></v-divider>

                    <v-list inactive nav>
                        <v-list-group value="false" no-action>
                            <template v-slot:activator>
                                <v-list-item-icon>
                                    <v-icon>people</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>{{ $t('menuItems.USERS') }}</v-list-item-title>
                            </template>
                            <v-list-item link to="/usersManagement">
                                <v-list-item-icon>
                                    <v-icon>settings</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>{{ $t('menuItems.USER_MANAGEMENT') }}</v-list-item-title>
                            </v-list-item>
                        </v-list-group>


                        <v-list-item @click="userLogout">
                            <v-list-item-icon>
                                <v-icon>mdi-exit-to-app</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{
                                $t('menuItems.LOGOUT')
                                }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <!--other devices drawer-->

                <v-navigation-drawer
                    style="border-radius: 0 !important;"
                    :right="rtlDrawer"
                    v-else
                    v-model="sidebar"
                    app
                >
                    <template v-slot:prepend>
                        <v-list>
                            <v-list-group sub-group no-action>
                                <template v-slot:activator>
                                    <v-list-item>
                                        <v-list-item-title>Steve Adams</v-list-item-title>
                                        <v-list-item-avatar>
                                            <v-img
                                                src="https://randomuser.me/api/portraits/men/15.jpg"
                                            ></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>
                                </template>

                                <v-list-item link>
                                    <v-list-item-icon>
                                        <v-icon small>settings</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title style="font-size: 12px">
                                        {{ $t('menuItems.ACCOUNT_SETTING') }}
                                    </v-list-item-title>
                                </v-list-item>

                                <v-list-item @click="userLogout">
                                    <v-list-item-icon>
                                        <v-icon small>mdi-exit-to-app</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title style="font-size: 12px" class="mr-3">{{
                                        $t('menuItems.LOGOUT')
                                        }}</v-list-item-title>
                                </v-list-item>
                            </v-list-group>
                        </v-list>
                    </template>

                    <v-divider></v-divider>

                    <v-list nav>
                        <v-list-item
                            v-if="!$vuetify.breakpoint.lg && !$vuetify.breakpoint.xl"
                            link
                            to="/dashboard"
                        >
                            <v-list-item-icon>
                                <v-icon>dashboard</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="mr-3">{{ $t('menuItems.DASHBOARD') }}</v-list-item-title>
                        </v-list-item>

                    </v-list>
                </v-navigation-drawer>

                <!--other devices drawer ended here-->

            </v-card>
        </template>

        <!--app nav bar -->

        <v-app-bar app flat>
            <span>
                <v-app-bar-nav-icon
                    v-if="!$vuetify.breakpoint.lg && !$vuetify.breakpoint.xl"
                    @click="sidebar = !sidebar"
                ></v-app-bar-nav-icon>
              </span>
            <v-toolbar-title class="headline text-uppercase">
                <div v-resize-text>
                    <router-link
                        :to="{ name: 'home' }"
                        tag="span"
                        style="cursor: pointer"
                        v-if="isTokenSet"
                    >{{ appTitle }}</router-link
                    >
                    <router-link
                        :to="{ name: 'landing' }"
                        tag="span"
                        style="cursor: pointer"
                        v-else
                    ></router-link>
                </div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <transition name="slide-x-transition" mode="out-in">
                    <v-text-field
                        v-if="searchField"
                        :label="$t('menuItems.SEARCH')"
                        single-line
                        class="search-field"
                        style="margin-top: 8px; width: 165px"
                    >
                    </v-text-field>
                </transition>
                <v-btn v-if="!$vuetify.theme.dark" @click="$vuetify.theme.dark = true" text>
                    <v-icon>wb_sunny</v-icon>
                </v-btn>
                <v-btn v-else @click="$vuetify.theme.dark = false" text>
                    <v-icon>brightness_2</v-icon>
                </v-btn>
                <v-btn
                    text
                    small
                    @click="search_open"
                    v-if="!searchField"
                    class="search-btn"
                >
                    <v-icon>search</v-icon>
                </v-btn>
                <v-btn
                    v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                    text
                    small
                    to="/dashboard"
                >
                    <v-icon>dashboard</v-icon>
                </v-btn>
                <v-menu
                    v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                        bottom
                        offset-y
                        min-width="300"
                        origin="center center"
                        transition="scale-transition"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            text
                            small
                            v-on="on"
                        >
                            <v-icon>person</v-icon>
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
                        <v-list-item @click="" to="/profile">
                            <v-list-item-title>{{ $t('menuItems.PROFILE') }}</v-list-item-title>
                            <v-icon>person</v-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>{{ $t('menuItems.ACCOUNT_SETTING') }}</v-list-item-title>
                            <v-icon>build</v-icon>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                            <v-btn @click="userLogout" small color="danger">{{ $t('menuItems.LOGOUT') }}</v-btn>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn text small>
                    <v-icon>notifications</v-icon>
                </v-btn>
                <v-btn
                    small
                    text
                    v-if="isTokenSet"
                    @click="userLogout"
                    class="hidden-sm-and-down btnLogout"
                >
                    <v-icon left>mdi-exit-to-app</v-icon>
                    {{ $t('menuItems.LOGOUT') }}
                </v-btn>
                <LocaleChanger />
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import LocaleChanger from '@/components/core/LocaleChanger'
    import ResizeText from 'vue-resize-text'

    export default {
        name: 'Toolbar',
        metaInfo() {
            return {
                title: this.$store.getters.appTitle,
                htmlAttrs: {
                    lang: this.$i18n.locale
                },
                meta: [
                    { name: 'msapplication-TileColor', content: '#ffc40d' },
                    { name: 'theme-color', content: '#ffffff' },
                    {
                        name: 'apple-mobile-web-app-title',
                        content: this.$store.getters.appTitle
                    },
                    { name: 'application-name', content: this.$store.getters.appTitle }
                ],
                link: [
                    {
                        rel: 'apple-touch-icon',
                        sizes: '180x180',
                        href: '/apple-touch-icon.png'
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '32x32',
                        href: '/favicon-32x32.png'
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '16x16',
                        href: '/favicon-16x16.png'
                    },
                    { rel: 'manifest', href: '/site.webmanifest' },
                    { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
                    { rel: 'favicon', href: '/favicon.ico' }
                ]
            }
        },
        components: {
            LocaleChanger
        },
        directives: {
            ResizeText
        },
        data() {
            return {
                sidebar: false,
                rtlDrawer: false,
                offset:true,
                searchField: false,
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
            }
        },
        computed: {
            ...mapGetters(['appTitle', 'isTokenSet', 'user' , 'locale']),
            admin() {
                return this.user !== null ? this.user.role === 'admin' : false
            },

            menuItems() {
                return [
                    {
                        title: this.$t('menuItems.HOME'),
                        link: 'landing',
                        icon: 'mdi-home'
                    },
                    {
                        title: this.$t('menuItems.ABOUT'),
                        link: 'about',
                        icon: 'mdi-help-circle-outline',
                        class: 'btnAbout'
                    },
                    {
                        title: this.$t('menuItems.LOGIN'),
                        link: 'login',
                        icon: 'mdi-lock',
                        class: 'btnLogin'
                    },
                    {
                        title: this.$t('menuItems.SIGNUP'),
                        link: 'signup',
                        icon: 'mdi-plus-circle-outline',
                        class: 'btnLogin'
                    },
                    {
                        title: this.$t('menuItems.MY_PROFILE'),
                        link: 'profile',
                        icon: 'mdi-face',
                        class: 'btnProfile'
                    }
                ]
            }
        },
        watch : {
            locale(newValue) {
                if (newValue === 'fa') {
                   this.rtlDrawer = true;
                    console.log(newValue);
                }
                else this.rtlDrawer = false
            }
        },
        methods: {
            userLogout() {
                this.$store.dispatch('userLogout')
            },
            search_open() {
                this.searchField = !this.searchField
                console.log(this.$store.getters.locale);
            }
        },
        mounted() {
            if (this.$vuetify.rtl === true) {
                return this.rtlDrawer = true;
            }
            else this.rtlDrawer = false
        }

    }
</script>

<style>
    /*navbar global styles */
    .v-application--is-rtl .v-list-item__icon:first-child{
        margin-left: 14px!important;
    }
    .v-application .v-list-item__icon:first-child{
        margin-right: 14px!important;
    }
    .v-application--is-rtl .v-list-group--no-action>.v-list-group__items>div>.v-list-item {
        padding-right: 30px !important;
    }
    .v-application--is-ltr .v-list-group--no-action>.v-list-group__items>div>.v-list-item {
        padding-left: 30px !important;
    }
    .slide-x-transition-enter-active,
    .slide-x-transition-enter-active-to {
        transition: opacity 1.5s;
    }

    .slide-x-enter,
    .slide-x-leave-to {
        opacity: 0;
    }
</style>
