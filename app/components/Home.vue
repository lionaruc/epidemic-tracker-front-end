<template>
    <Page>
        <ActionBar  actionBarHidden="true"></ActionBar>

        <StackLayout stretchLastChild="true" >

            <Tabs height="1200" tabsPosition="bottom">
                        <TabStrip>
                            <TabStripItem>
                                <Label text="Home" style="color: black" v-if="false"></Label>
                                <Image src="res://home"></Image>
                            </TabStripItem>
                            <TabStripItem>
                                <Label text="Settings" v-if="false"></Label>
                                <Image src="res://settings"></Image>
                            </TabStripItem>
                            <TabStripItem>
                                <Label text="Search" v-if="false"></Label>
                                <Image src="res://search"></Image>
                            </TabStripItem>
                        </TabStrip>

                        <TabContentItem>
                            <GridLayout>
                                <StackLayout orientation="vertical">

                                    <GridLayout columns="*, *" rows="auto, auto" v-if="!processing" style="height: 120; padding: 23"  class="bg-dark">
                                    
                                        <Label :text="day" row="0" col="0" class="large" />
                                        <Label :text="month + ' ' + date + ', ' + year" row="1" col="0" class="body small"
                                            color="#C2C8E6" />
                            
                                        <Label :text="summary.meetings_today" row="0" col="1" class="large text-right"
                                            color="#89D5E2"  />
                                        <Label text="contacts today" row="1" col="1" class="small text-right body"
                                            color="#89D5E2" />

                                    </GridLayout>

                                    <GridLayout columns="*, *" rows="auto, auto" v-if="!processing" style="height: 120; padding: 23"  class="bg-dark">

                                        <Button text="Contact"
                                            @tap="showModal"
                                            class="btn btn-primary" row="1" col="0" color="#C2C8E6" style="margin-top: 1"></Button>

                                        <Button text="Activity"
                                            @tap="showModal"
                                            class="btn btn-primary" row="1" col="1" color="#C2C8E6" style="margin-top: 1"></Button>

                                    </GridLayout>


                                <StackLayout orientation="vertical" style="height: 380; text-align: center" v-if="!processing">

                                <label :text="percentageDescription" style=" width: 180; color: black"/>
                                <RadRadialGauge v-if="true" style="height: 220">
                                    <RadialScale v-tkRadialGaugeScales minimum="0" maximum="6"
                                        radius="0.90">
                                    <ScaleStyle v-tkRadialScaleStyle majorTicksCount="7"
                                        minorTicksCount="9" lineThickness="0"
                                        labelsCount="7" ticksOffset="0" />
                                    <RadialBarIndicator v-tkRadialScaleIndicators
                                        minimum="0" maximum="1.2" location="0.97">
                                        <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                        fillColor="#dddddd" />
                                    </RadialBarIndicator>
                                    <RadialBarIndicator v-tkRadialScaleIndicators
                                        minimum="1.2" maximum="2.4" location="0.97">
                                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                        fillColor="#9DCA56" />
                                    </RadialBarIndicator>
                                    <RadialBarIndicator v-tkRadialScaleIndicators
                                        minimum="2.4" maximum="3.6" location="0.97">
                                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                        fillColor="#F0C44D" />
                                </RadialBarIndicator>
                                <RadialBarIndicator v-tkRadialScaleIndicators
                                    minimum="3.6" maximum="4.8" location="0.97">
                                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                    fillColor="#E27633" />
                                </RadialBarIndicator>
                                <RadialBarIndicator v-tkRadialScaleIndicators
                                    minimum="4.8" maximum="6" location="0.97">
                                    <BarIndicatorStyle v-tkRadialBarIndicatorStyle
                                    fillColor="#A7010E" />
                                </RadialBarIndicator>
                                <RadialNeedle v-tkRadialScaleIndicators
                                :value="percentage" />
                            </RadialScale>
                    </RadRadialGauge>

                    <Button text="Self Check Quiz"
                        class="btn btn-primary"
                        style="background-color: red"
                        @tap="openForm"
                        color="#C2C8E6"></Button>

                    

                    </StackLayout>
                
                
                    </StackLayout>   

            
            
            
                            </GridLayout>
                        </TabContentItem>
                        <TabContentItem>
                            <GridLayout>

                                <StackLayout orientation="vertical">

                                    <GridLayout columns="*, *" rows="auto, auto" v-if="!processing" style="height: 120; padding: 23"  class="bg-dark">
                                    
                                        <Label text="Activities" row="0" col="0" class="medium" />
                                        
                                        <Label :text="month + ' ' + date + ', ' + year" row="1" col="0" class="body small"
                                            color="#C2C8E6" />
                            
                                        

                                    </GridLayout>
                                <ScrollView>

                                        <StackLayout >
                                            <Card>
                                                <template v-slot:header>

                                                  <label>Vue is the best</label>

                                                </template>
                                            </Card>

                                        <Card>hhh</Card>

                                        <Card>hhh</Card>

                                        <Card>hhh</Card>
                                        </StackLayout>

                                
                                        
		                        </ScrollView>
                                 </StackLayout>
                            </GridLayout>
                        </TabContentItem>
                        <TabContentItem>
                            <GridLayout>
                                <Label text="Search Page"
                                    class="h2 text-center">
                                </Label>
                            </GridLayout>
                        </TabContentItem>
                    </Tabs>

            

            

            <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>

            
        </StackLayout>
    </Page>
</template>

<script>
    import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";



    import {BASE_API} from '../common/constants';
    import Vue from "nativescript-vue";
    import RadRadialGauge from "nativescript-ui-gauge/vue";
    Vue.use(RadRadialGauge);


    import Login from "./Login";

    import Card from "./Card";

    import TimeLine from "./TimeLine";

    import QuizView from "./QuizView";

    import ContactModal from "./ContactModal";

    const appSettings = require("tns-core-modules/application-settings");

    export default {
        components: {
            Card
        },
        data() {
            return {
                processing: true,
                processingActivities: true,
                summary: null,
                token: null,
                userid: null,
                username: '',
                message: `Welcome`
            };
        },
        
        created() {

            this.token = appSettings.getString("tok", null);

            this.userid = appSettings.getString("userid", null);
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

            this.loadSummary();
        },
        methods: {
            loadSummary () {
                var addr = `${BASE_API}Users/user_summary/${this.userid}`
                console.log(addr)
                request({
                    url: addr,
                    method: "GET",
                    headers: { "Content-Type": "application/json" , 'Authorization': 'Bearer ' + this.token},
                    }).then((response) => {
                        const result = response.content.toJSON();

                        console.log(result);
                         
                        if(response.statusCode == 200) {

                            this.summary = result;

                            this.percentage = (6 - (this.summary.latest_score_numeric / 100) * 6)

                            this.percentageDescription = this.summary.latest_score_title;
                        }

                        this.processing = false;

                    }, (e) => {
                        // this.processing = false;
                        this.alert(
                            "Unfortunately we could not fetch your data."
                        );
                    })
            },
            showModal() {
                this.$showModal(ContactModal);
            },   
            openForm() {
                this.$navigateTo(QuizView, {
                    transition: {
                    name:'fade',
                    duration: 1200
                    },
                    props: {
                        quizid: this.summary.active_quiz_id, 
                    }
                });
            },   
            logout() {
                this.$backendService.logout();
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            },
            goToTimeline() {

                this.$navigateTo(TimeLine, {
                    clearHistory: true
                });
                
            }
        }
    };
</script>

<style>
</style>
