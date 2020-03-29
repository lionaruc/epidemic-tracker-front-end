<template>
    <Page actionBarHidden="true" @loaded="onLoaded">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="~/images/logo.png"></Image>
                <Label class="header" text="CORONA TRACK"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" >
                        <TextField class="input" hint="Phone +254xx" :isEnabled="!processing"
                            keyboardType="phone" autocorrect="false"
                            autocapitalizationType="none" v-model="user.phone"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    
                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button :text="isLoggingIn ? 'Send Code' : 'Sign Up'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary m-t-20"></Button>

               
            </StackLayout>

            
        </FlexboxLayout>
    </Page>
</template>

<script>
    import Home from "./Home";

    import Code from "./Code";

    import {BASE_API} from '../common/constants';

    import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";

    const appSettings = require("tns-core-modules/application-settings");

    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                prefix: '+254',
                prefixes: [
                    "+254"
                ],
                user: {
                    email: "vue@nativescript.org",
                    password: "vue",
                    phone: null,
                    confirmPassword: "vue"
                }
            };
        },
        created () {
            
            this.user.phone = appSettings.getString("username", null);
        },
        methods: {
            onLoaded(args){
                console.log('page is loaded.');

                const tok = appSettings.getString("tok", null);

                console.log(tok);
                if (tok) {
                    this.$navigateTo(Code, { clearHistory: true });
                    // this.processing = true;
                    console.log('logging in')
                }

            },
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },
            submit() {
                if (!this.user.phone) {
                    this.alert(
                        "Please provide phone number to proceed."
                    );
                    return;
                }

                this.processing = true;
                if (this.isLoggingIn) {
                    this.login();
                }
            },

            login() {

                var complete_phone = this.user.phone.indexOf('+') ==-1? this.prefix +  this.user.phone: this.user.phone;

                request({
                    url: BASE_API + "Users/signup",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({
                        username: this.user.phone,
                    })
                    }).then((response) => {
                        const result = response.content.toJSON();

                        console.log(response)
                        this.processing = false;

                        if(response.statusCode == 200) {
                            if (!appSettings.getString("username", null)) {

                            appSettings.setString("username", this.user.phone);
                        }

                        else {
                            appSettings.remove("username");
                            appSettings.setString("username", this.user.phone);
                        }

                        this.$navigateTo(Code, { clearHistory: true });
                    }

                    else{
                        this.alert(
                            "Unfortunately we could not set up your account."
                        );
                    }

                        

                    }, (e) => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we could not set up your account."
                        );
                    })
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
                    title: "APP NAME",
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
