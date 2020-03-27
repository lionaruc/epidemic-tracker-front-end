<template>
    <Page>
        <ActionBar title="YOUR APP"></ActionBar>

        <StackLayout>
            <Label class="body m-20" :text="message" textWrap="true"></Label>
            <Button class="btn btn-primary" text="Log out" @tap="logout"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    import Login from "./Login";

    const appSettings = require("tns-core-modules/application-settings");

    export default {
        data() {
            return {
                username: '',
                message: `Welcome`
            };
        },
        created() {
            // second parameter is default value
            this.message = 'Welcome' + appSettings.getString("username", null);
            this.username = appSettings.getString("username", null);
        },
        methods: {
            logout() {
                this.$backendService.logout();
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            }
        }
    };
</script>

<style>
</style>
