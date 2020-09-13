<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
    >
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="go(item)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down" @click="$router.push('/', ()=>({}))">Vue Example</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              v-for="(item, index) in [{title:'Profile'}, {title:'Logout'}]"
              :key="index"
              @click="clickMenu(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-main>
      <v-container
          fluid
      >
        <router-view/>
      </v-container>
    </v-main>
    <v-btn
        bottom
        color="pink"
        dark
        fab
        fixed
        right
        @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
        v-model="dialog"
        width="800px"
    >
      <v-card>
        <v-card-title class="grey darken-2">
          Create contact
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
                class="align-center justify-space-between"
                cols="12"
            >
              <v-row
                  align="center"
                  class="mr-0"
              >
                <v-avatar
                    size="40px"
                    class="mx-3"
                >
                  <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                  >
                </v-avatar>
                <v-text-field
                    placeholder="Name"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  prepend-icon="mdi-account-card-details-outline"
                  placeholder="Company"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  placeholder="Job title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  prepend-icon="mdi-mail"
                  placeholder="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  type="tel"
                  prepend-icon="mdi-phone"
                  placeholder="(000) 000 - 0000"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  prepend-icon="mdi-text"
                  placeholder="Notes"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
              text
              color="primary"
          >More</v-btn>
          <v-spacer></v-spacer>
          <v-btn
              text
              color="primary"
              @click="dialog = false"
          >Cancel</v-btn>
          <v-btn
              text
              @click="dialog = false"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import $session from '@/service/sessionService'

export default {
  name: 'Home',
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'mdi-contacts', text: 'Contacts', path: '/Contacts' },
      { icon: 'mdi-cog', text: 'Settings', path: '/Settings' }
    ],
  }),
  created() {
    if (!$session.getCurrentUser()) this.$router.push('/login', () => {});
  },
  methods: {
    go(item) {
      this.$router.push(item.path).catch(() => {});
    },

    clickMenu(item) {
      if (item.title == 'Profile') {
        alert('profile');
      } else if (item.title == 'Logout') {
        $session.clear();
        this.$router.replace('/login');
      }
    }
  }
}
</script>
