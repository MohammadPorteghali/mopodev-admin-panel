<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <div class="ma-10" style="text-align: center">
            <v-btn color="success" class="mb-2" @click="newItem">{{ $t('USERS.ADD_USER') }}</v-btn>
        </div>

        <v-data-table

            :headers="headers"
            :items="members"
            sort-by="name"
            class="elevation-1 , ma-10"
        >
            <template v-slot:top>
                <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field outlined v-model="editedItem.name"
                                                      :label="$t('USERS.USER_NAME')"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field outlined v-model="editedItem.role"
                                                      :label="$t('USERS.ROLE')"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field outlined v-model="editedItem.group"
                                                      :label="$t('USERS.GROUP')"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">{{ $t('USERS.CANCEL') }}</v-btn>
                            <v-btn color="blue darken-1" text @click="save">{{ $t('USERS.SAVE') }}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="deleteDialog" max-width="500px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ $t('USERS.DELETE') }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        Are you sure to delete user
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDeleteDialog">{{ $t('USERS.CANCEL') }}
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="deleteUser">{{ $t('USERS.DELETE') }}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </template>
            <template v-slot:item.action="{ item }">
                <v-icon
                    color="primary"
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    edit
                </v-icon>
                <v-icon
                    color="danger"
                    small
                    class="mr-2"
                    @click="deleteItem(item)"
                >
                    delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
            <template v-slot:item.activity="{ item }">
                <v-chip :color="getColor(item.activity)" dark>{{ item.activity }}</v-chip>
            </template>
        </v-data-table>

    </div>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            deleteDialog: false,
            members: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                group: '',
                role: '',
            },
            defaultItem: {
                name: '',
                group: '',
                role: '',
            },
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? this.$t('USERS.NEW_USER') : this.$t('USERS.EDIT_USER')
            },
            headers(){
                let userNameText = this.$t('USERS.USER_NAME');
                let roleText = this.$t('USERS.ROLE');
                let activityText = this.$t('USERS.ACTIVITY');
                let groupText = this.$t('USERS.GROUP');
                return [{
                    text: userNameText,
                    align: 'left',
                    value: 'name',
                },
                    {text: roleText, value: 'role', sortable: false},
                    {text: activityText, value: 'activity'},
                    {text: groupText, value: 'group'},
                    {text: '', value: 'action', sortable: false}];

            }
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
        },
        mounted() {
        },
        created() {
            this.initialize()
        },

        methods: {
            initialize() {
                this.members = [
                    {
                        name: 'علی',
                        role: 'CEO',
                        group: 'Sadr',
                        activity: 'online'
                    },
                    {
                        name: 'Hasan Niaraki',
                        role: 'CEO',
                        group: 'Sadr',
                        activity: 'offline'
                    },
                    {
                        name: 'Pouria Kiaie',
                        role: 'Web Developer',
                        group: 'Sadr',
                        activity: 'online'
                    },
                    {
                        name: 'Hamed Golshenas',
                        role: 'Android Developer',
                        group: 'Sadr',
                        activity: 'offline'
                    },
                    {
                        name: 'Mohammad Porteghali',
                        role: 'Web Developer',
                        group: 'Sadr',
                        activity: 'online'
                    },
                    {
                        name: 'Jelly bean',
                        role: 'other',
                        group: 'other',
                        activity: 'offline'
                    },
                    {
                        name: 'Lollipop',
                        role: 'other',
                        group: 'other',
                        activity: 'offline'
                    },
                    {
                        name: 'Honeycomb',
                        role: 408,
                        group: 'other',
                        activity: 'offline'
                    },
                    {
                        name: 'Donut',
                        role: 'other',
                        group: 'other',
                        activity: 'offline'
                    },
                    {
                        name: 'KitKat',
                        role: 'other',
                        group: 'other',
                        activity: 'offline'
                    },
                ]
            },

            editItem(item) {
                this.editedIndex = this.members.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                this.deleteIndex = this.members.indexOf(item);
                this.deleteDialog = true
            },

            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.members[this.editedIndex], this.editedItem)
                } else {
                    this.members.push(this.editedItem)
                }
                this.close()
            },

            newItem() {
                this.dialog = true
                Object.assign(this.members[this.editedIndex], this.editedItem)
            },

            closeDeleteDialog() {
                this.deleteDialog = false
            },

            deleteUser() {
                this.members.splice(this.deleteIndex);
                this.closeDeleteDialog()
            },

            getColor(activity) {
                if (activity === 'online') return 'success';
                else return 'danger'
            },
        },
    }
</script>

<style>
    .v-application--is-rtl .text-left {
        text-align: right !important;
        /*padding-top: 5px;*/
        /*padding-bottom: 5px;*/
        /*padding-left:  70px;*/
    }

    /*th{*/
    /*padding-top: 5px;*/
    /*padding-bottom: 5px;*/
    /*padding-left:  70px;*/
    /*}*/
</style>
