<template>
  <div>
    <v-row class="mt-1 mb-3">
      <v-col>
        <h3>{{ $t('users.TITLE') }}</h3>
        <v-btn color="primary" class="mb-2 mx-3" x-small outlined @click="newDialog = true" fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" xl="4" lg="4" md="4" sm="4">
        <v-text-field
            v-model="searchKey"
            append-icon="mdi-magnify"
            outlined
            small
            :label="$t('dataTable.SEARCH')"
            single-line
            hide-details
            dense
        />
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="4">
        <v-combobox
            v-model="filterActivity"
            @change="filterTable"
            :items="activities"
            item-text="title"
            item-value="value"
            :label="$t('users.headers.ACTIVITY')"
            multiple
            outlined
            dense
            hide-details
        />
      </v-col>
    </v-row>

    <v-data-table
        :headers="headers"
        :items="members"
        :search="searchKey"
        sort-by="name"
        class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-icon
            color="primary"
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            color="danger"
            small
            class="mr-2"
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:item.activity="{ item }">
        <v-chip :color="getColor(item.activity)" dark>{{ item.activity }}</v-chip>
      </template>
    </v-data-table>
    <!--new item dialog-->
    <v-dialog v-model="newDialog" max-width="500px">
      <v-card>
        <v-card-title class="mb-5">
          <span class="headline">{{ $t('dataTable.NEW_ITEM') }}</span>
        </v-card-title>
        <v-card-text>
          <v-text-field dense outlined v-model="newItem.name"
                        :label="$t('users.headers.NAME')"></v-text-field>
          <v-text-field dense outlined v-model="newItem.role"
                        :label="$t('users.headers.ROLE')"></v-text-field>
          <v-text-field dense outlined v-model="newItem.group"
                        :label="$t('users.headers.GROUP')"></v-text-field>
          <v-select dense outlined :items="activities" v-model="newItem.activity"
                    :label="$t('users.headers.ACTIVITY')"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="newDialog = false">{{ $t('dataTable.CANCEL') }}</v-btn>
          <v-btn color="success" @click="submitNewItem">{{ $t('dataTable.SAVE') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--edit dialog-->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title class="mb-5">
          <span class="headline">{{ $t('dataTable.EDIT_ITEM') }}</span>
        </v-card-title>
        <v-card-text>
          <v-text-field dense outlined v-model="selectedItem.name"
                        :label="$t('users.headers.NAME')"></v-text-field>
          <v-text-field dense outlined v-model="selectedItem.role"
                        :label="$t('users.headers.ROLE')"></v-text-field>
          <v-text-field dense outlined v-model="selectedItem.group"
                        :label="$t('users.headers.GROUP')"></v-text-field>
          <v-select dense outlined :items="activities" v-model="selectedItem.activity"
                    :label="$t('users.headers.ACTIVITY')"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editDialog = false">{{ $t('dataTable.CANCEL') }}</v-btn>
          <v-btn color="success" @click="saveEdit">{{ $t('dataTable.SAVE') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--delete dialog-->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ $t('dataTable.DELETE') }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                Are you sure to delete user?
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">{{ $t('dataTable.CANCEL') }}
          </v-btn>
          <v-btn color="danger" dark @click="deleteUser">{{ $t('dataTable.DELETE') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    newDialog: false,
    editDialog: false,
    deleteDialog: false,
    searchKey: '',
    editedIndex: -1,
    selectedItem: {},
    selectedItemIndex: {},
    activities: ['active', 'inactive'],
    newItem: {
      name: '',
      group: '',
      role: '',
      activity: ''
    },
    members: [
      {
        name: 'John',
        role: 'CEO',
        group: 'Apple',
        activity: 'active'
      },
      {
        name: 'Max',
        role: 'CEO',
        group: 'Amazon',
        activity: 'active'
      },
      {
        name: 'Harry',
        role: 'Web Developer',
        group: 'Google',
        activity: 'inactive'
      },
      {
        name: 'Louis',
        role: 'Android Developer',
        group: 'Facebook',
        activity: 'inactive'
      },
      {
        name: 'Danny',
        role: 'Web Developer',
        group: 'Google',
        activity: 'active'
      },
      {
        name: 'Sara',
        role: 'CEO',
        group: 'Google',
        activity: 'inactive'
      }
    ],
    unchangedMembers: [
      {
        name: 'John',
        role: 'CEO',
        group: 'Apple',
        activity: 'active'
      },
      {
        name: 'Max',
        role: 'CEO',
        group: 'Amazon',
        activity: 'active'
      },
      {
        name: 'Harry',
        role: 'Web Developer',
        group: 'Google',
        activity: 'inactive'
      },
      {
        name: 'Louis',
        role: 'Android Developer',
        group: 'Facebook',
        activity: 'inactive'
      },
      {
        name: 'Danny',
        role: 'Web Developer',
        group: 'Google',
        activity: 'active'
      },
      {
        name: 'Sara',
        role: 'CEO',
        group: 'Google',
        activity: 'inactive'
      }
    ],
    filterActivity: ''
  }),

  computed: {
    headers() {
      let userNameText = this.$t('users.headers.NAME');
      let roleText = this.$t('users.headers.ROLE');
      let activityText = this.$t('users.headers.ACTIVITY');
      let groupText = this.$t('users.headers.GROUP');
      return [
        {
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
  methods: {
    editItem(item) {
      this.selectedItem = {...item}
      this.members.forEach(
          (element, index) => {
            if (element.name === item.name) {
              this.selectedItemIndex = index
            }
          }
      )
      this.editDialog = true
    },
    saveEdit() {
      this.unchangedMembers[this.selectedItemIndex] = this.selectedItem
      console.log('s', this.selectedItem)
      console.log('m', this.members[this.selectedItemIndex])
      console.log('this.members', this.members)
      this.editDialog = false
      return this.members = [...this.unchangedMembers]
    },
    submitNewItem() {
      this.members.push({
        name: this.newItem.name,
        role: this.newItem.role,
        group: this.newItem.group,
        activity: this.newItem.activity
      })
      this.newItem = {
        name: '',
        group: '',
        role: '',
        activity: ''
      }
      this.newDialog = false;
    },
    deleteItem(item) {
      this.selectedDeleteItem = item;
      this.deleteDialog = true
    },
    deleteUser() {
      this.members = this.members.filter(
          e => {
            if (e.name === this.selectedDeleteItem.name) return false
            else return true
          }
      )
      this.deleteDialog = false;
    },
    getColor(activity) {
      if (activity === 'active') return 'success';
      else return 'danger'
    },
    filterTable() {
      if (this.filterActivity.length === 0) {
        return this.members = this.unchangedMembers
      } else {
        return this.members = this.unchangedMembers.filter(
            e => {
              if (this.filterActivity.length > 0 && !this.filterActivity.includes(e.activity.toLowerCase())) return false
              return true
            }
        )
      }
    },
  },
}
</script>

<style>
.v-application--is-rtl .text-left {
  text-align: right !important;
}
</style>

<style scoped lang="scss">
h3 {
  display: inline;
  font-weight: 600;
}
</style>
