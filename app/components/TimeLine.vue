<template>
    <Page>
        <ActionBar  actionBarHidden="true"></ActionBar>

        <DockLayout stretchLastChild="true" class="bg-dark">
            <StackLayout orientation="vertical" dock="top" class="bg-dark">
                <!-- Navigaton -->
                <GridLayout rows="auto" columns="75,*,75" class="action-bar p-20">
                    <Image src="~/images/iconToday.png" class="action-item" row="0"
                        col="0"  stretch="aspectFit"
                        @tap="goToHome"
                        width="24" horizontalAlignment="left" opacity="0.2"/>

                    <Image src="~/images/iconCalendar.png" class="action-item"
                        row="0" col="1"  stretch="aspectFit"
                        width="24" horizontalAlignment="center" />

                    <Image src="~/images/iconBalance.png" class="action-item" row="0"
                        col="2"  stretch="aspectFit"
                        width="24" horizontalAlignment="right" opacity="0.2"/>
                </GridLayout>

                <!-- /Navigation -->
                <GridLayout columns="*, *" rows="auto, auto" class="m-y-30 m-x-20">
                    <!-- Date Today -->
                    <Label :text="day" row="0" col="0" class="large" />
                    <Label :text="month + ' ' + date + ', ' + year" row="1" col="0" class="body small"
                        color="#C2C8E6" />
                    <!-- Spending this month -->
                    <Label text="5" row="0" col="1" class="large text-right"
                        color="#89D5E2" />
                    <Label text="Met today" row="1" col="1" class="body small text-right"
                        color="#89D5E2" />
                </GridLayout>
            </StackLayout>

            
            <!-- Meetings -->
            <StackLayout orientation="vertical" class="m-t-30 bg-dark" v-if="true">
                 

            <Button text="Logout" :isEnabled="!processing"
                   @tap="logout" class="btn btn-primary m-t-20"></Button>

                
            </StackLayout>
            <!-- /Meetings -->
        </DockLayout>
    </Page>
</template>

<script>
    import Login from "./Login";

    import Home from "./Home";

    const appSettings = require("tns-core-modules/application-settings");

    export default {
        data() {
            return {
                username: '',
                timeline: [{
                        name: "John Oliver",
                        address: "Mama Ngina's",
                        type: "Meet",
                        date: "2h ago"
                    },
                    {
                        name: "Citi Hopa",
                        address: "BS, Nairobi",
                        type: "Ride",
                        date: "3h ago"
                    },
                    {
                        name: "Uber",
                        address: "Muindi Mbingu",
                        type: "Ride",
                        date: "3h ago"
                    },
                    {
                        name: "Metro",
                        address: "Kenya Archives",
                        type: "Ride",
                        date: "3h ago"
                    },
                    {
                        name: "Citi Hopa",
                        address: "Kenya Archives",
                        type: "Ride",
                        date: "3h ago"
                    },
                ],
                message: `Welcome`
            };
        },
        created() {
            // second parameter is default value
            this.message = 'Welcome' + appSettings.getString("username", null);
            this.username = appSettings.getString("username", null);
            var currentDate = new Date();
            var day = currentDate.getDay();
            var date = currentDate.getDate();
			var year = currentDate.getFullYear();
            
            var weekdays = new Array(7);
            weekdays[0] = "Sunday";
            weekdays[1] = "Monday";
            weekdays[2] = "Tuesday";
            weekdays[3] = "Wednesday";
            weekdays[4] = "Thursday";
            weekdays[5] = "Friday";
            weekdays[6] = "Saturday";
            var dayName = weekdays[day];
            
            this.day = dayName;
            this.date = date;
			this.year = year;

            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";

            var monthName = month[currentDate.getMonth()];
            this.month = monthName;
        },
        methods: {
            logout() {

                appSettings.remove("tok");

                appSettings.remove("username");

                this.$navigateTo(Login, {
                    clearHistory: true
                });
            },
            goToHome() {

                this.$navigateTo(Home, {
                    clearHistory: true
                });
                
            }
        }
    };
</script>

<style>
</style>
