<template>
    <Page actionBarHidden="true" @loaded="onLoaded">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="~/images/logo.png"></Image>
                <Label class="header" text="Enter Code"></Label>
                <Label class="desc" text="Please enter the code you received"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Code" :isEnabled="!processing"
                            keyboardType="phone" autocorrect="false"
                            autocapitalizationType="none" v-model="user.password"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-dark"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary m-t-20"></Button>

                <Label *v-show="isLoggingIn" text="Didn't receive code?"
                    class="login-label" @tap="noCode()"></Label>
            </StackLayout>

        </FlexboxLayout>
    </Page>
</template>

<script>
    import Home from "./Home";
    import Login from "./Login";

    import {BASE_API} from '../common/constants'

    import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
    
    const appSettings = require("tns-core-modules/application-settings");

    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                user: {
                    email: "vue@nativescript.org",
                    password: null,
                    phone: '',
                    confirmPassword: "vue"
                }
            };
        },
        created() {
            // second parameter is default value
            this.user.phone = appSettings.getString("username", null);
        },
        methods: {
            onLoaded(args){
                console.log('page is loaded.');

                const tok = appSettings.getString("tok", null);

                console.log(tok);
                if (tok) {
                    this.$navigateTo(Home, { clearHistory: true });
                    console.log('logging in')
                }
            },
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },
            login() {
                request({
                    url: BASE_API + "Users/authenticate",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({
                        username: this.user.phone,
                        password: this.user.password
                    })
                    }).then((response) => {
                        const result = response.content.toJSON();
                        this.processing = false;

                        console.log(response);
                        
                        if(response.statusCode == 200) {
                            appSettings.setString("tok", result.token);
                            appSettings.setString("userid", result.id + '');

                            this.$navigateTo(Home, { clearHistory: true });
                        }
                        else{
                            this.alert(
                                "Unfortunately we could not find your account."
                            );
                        }
                        

                    }, (e) => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we could not find your account."
                        );
                    })
            },
            submit() {
                if (!this.user.password || !this.user.password) {
                    this.alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }

                this.processing = true;
                if (this.isLoggingIn) {
                    this.login();
                }
            },

            noCode () {
                this.$navigateTo(Login, { clearHistory: true });
            },

            focusPassword() {
                this.$refs.password.nativeView.focus();
            },
            focusConfirmPassword() {
                if (!this.isLoggingIn) {
                    this.$refs.confirmPassword.nativeView.focus();
                }
            },
            alert(message) {
                return alert({
                    title: "AUTHENTICATION FAILED",
                    okButtonText: "OK",
                    message: message
                });
            }
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .desc {
        margin: 9;
        text-align: center;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>
