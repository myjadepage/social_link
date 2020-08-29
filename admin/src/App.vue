<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark flat
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <span>hakdfjfj@hanmail.net</span>
      <v-divider vertical inset class="ml-2 my-auto" style="max-height: 16px;border-color: rgba(255, 255, 255, 0.5);"></v-divider>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
        <span class="mr-2">로그아웃</span>
      </v-btn>
    </v-app-bar>

    <v-container>
        <v-row
          no-gutters
          class="height: 100px; grey lighten-1"
        >
          <v-col>
            <v-navigation-drawer permanent>
              <v-list
                dense
                nav
              >
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-col>
        </v-row>
    </v-container>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' }
    ],
    right: null
  })
}
</script>
