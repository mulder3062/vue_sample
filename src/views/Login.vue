<template>
    <v-app>
      <v-main>
        <v-container
            class="fill-height"
            fluid
        >
          <v-row
              align="center"
              justify="center"
          >
            <v-col
                cols="12"
                sm="8"
                md="4"
            >
              <v-card class="elevation-12">
                <v-toolbar
                    color="primary"
                    dark
                    flat
                >
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                        v-model="userId"
                        label="Login"
                        name="userId"
                        prepend-icon="mdi-account"
                        type="text"
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
</template>

<script>
import $session from '@/service/sessionService'

export default {
  name: "Login",
  data: () => ({
    userId: '',
    password: ''
  }),
  methods: {
    login() {
      $session.setCurrentUser({
        userId: this.userId
      });

      this.$router.replace('/');
    }
  }
}
</script>

<style scoped>

</style>