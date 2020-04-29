<template>
  <Page actionBarHidden="true" @loaded="onLoaded">
    <StackLayout>
      <Tabs height="100%" tabsPosition="bottom">
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
          <TabStripItem>
            <Label text="Search" v-if="false"></Label>
            <Image src="res://browse"></Image>
          </TabStripItem>

          <TabStripItem>
            <Label text="Icins" v-if="false"></Label>
            <Image src="res://favorites"></Image>
          </TabStripItem>
        </TabStrip>

        <TabContentItem>
          <!-- <GridLayout> -->
          <!-- <StackLayout orientation="vertical" > -->
          <ScrollView orientation="vertical">
            <StackLayout orientation="vertical">
            <GridLayout rows="*, 2*, auto" v-if="!processing" class="bg-dark home-header">
              <Label
                :text="day + ', ' + month + ' ' + date + ', ' + year"
                row="0"
                class="body small baloo2"
              />
              <StackLayout row="1" orientation="horizontal" horizontalAlign="center">
                <Label
                  textWrap="true"
                  textAlignment="left"
                  text="New people you have met today"
                  class="large home-label"
                />
                <FlexboxLayout flexDirection="row" justifyContent="center" class="text-wrapper">
                  <Label textAlignment="center" :text="summary.meetings_today" class="text-right" />
                </FlexboxLayout>
              </StackLayout>
              <FlexboxLayout
                row="2"
                flexDirection="row"
                justifyContent="space-around"
                v-if="!processing"
              >
                <Button
                  v-if="true"
                  :isEnabled="false"
                  @tap="openContactForm"
                  class="black-button btn-action"
                >
                  <FormattedString>
                    <!-- <Span text="{{'fa-heart-rate' | fonticon}}"></Span> -->
                    <Span>Add Contact</Span>
                  </FormattedString>
                </Button>

                <Button @tap="openContactForm" class="red-button btn-action">
                  <FormattedString>
                    <span>What I did today</span>
                  </FormattedString>
                </Button>
              </FlexboxLayout>
            </GridLayout>

            <StackLayout
              orientation="vertical"
              style="text-align: center"
              v-if="!processing"
              class="home-height-main"
            >
              <StackLayout class="update-section">
                <Label :text="percentageDescription" class="radial-label" />
                <Label
                  :text="'Last Updated: ' + date + ' ' + month + ' ' + year"
                  class="last-update"
                />
              </StackLayout>
              <FlexboxLayout androidElevation="60" flexDirection="column" height="300" class="radial-wrapper">
                <RadRadialGauge v-if="true" height="200">
                  <RadialScale v-tkRadialGaugeScales minimum="0" maximum="6" radius="0.90">
                    <ScaleStyle
                      v-tkRadialScaleStyle
                      majorTicksCount="7"
                      minorTicksCount="9"
                      lineThickness="0"
                      labelsCount="7"
                      ticksOffset="0"
                    />
                    <RadialBarIndicator
                      v-tkRadialScaleIndicators
                      minimum="0"
                      maximum="1.2"
                      location="0.97"
                    >
                      <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#dddddd" />
                    </RadialBarIndicator>
                    <RadialBarIndicator
                      v-tkRadialScaleIndicators
                      minimum="1.2"
                      maximum="2.4"
                      location="0.97"
                    >
                      <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#9DCA56" />
                    </RadialBarIndicator>
                    <RadialBarIndicator
                      v-tkRadialScaleIndicators
                      minimum="2.4"
                      maximum="3.6"
                      location="0.97"
                    >
                      <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#F0C44D" />
                    </RadialBarIndicator>
                    <RadialBarIndicator
                      v-tkRadialScaleIndicators
                      minimum="3.6"
                      maximum="4.8"
                      location="0.97"
                    >
                      <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#E27633" />
                    </RadialBarIndicator>
                    <RadialBarIndicator
                      v-tkRadialScaleIndicators
                      minimum="4.8"
                      maximum="6"
                      location="0.97"
                    >
                      <BarIndicatorStyle v-tkRadialBarIndicatorStyle fillColor="#A7010E" />
                    </RadialBarIndicator>
                    <RadialNeedle v-tkRadialScaleIndicators :value="percentage" />
                  </RadialScale>
                </RadRadialGauge>
                <StackLayout orientation="horizontal" class="risk-details">
                  <FlexboxLayout flexDirection="column" class="risk-detail-wrapper">
                    <!-- symptoms -->
                    <Label class="symptoms" text="Symptoms" />
                    <Label class="symptom" text="None" />
                  </FlexboxLayout>
                  <FlexboxLayout flexDirection="column" class="risk-detail-wrapper">
                    <!-- temperature -->
                    <Label class="symptoms" text="Temperature" />
                    <Label class="symptom">
                      <FormattedString>
                        <span class="symptom-val">Normal | 36.5&deg;C - 37.5&deg;C</span>
                      </FormattedString>
                    </Label>
                  </FlexboxLayout>
                </StackLayout>
              </FlexboxLayout>
              <StackLayout class="cta-section">
                <Button text="Self Check Quiz" class="take-quiz red-button" @tap="openForm"></Button>
              </StackLayout>

              <ActivityIndicator :busy="processing"></ActivityIndicator>
            </StackLayout>
            </StackLayout>
          </ScrollView>
          <!-- </StackLayout> -->

          <!-- </GridLayout> -->
        </TabContentItem>
        <!-- end TAB 1 -->
        <TabContentItem>
          <GridLayout>
            <StackLayout orientation="vertical">
              <GridLayout
                columns="*, *"
                rows="auto, auto"
                v-if="!processing"
                style="height: 120; padding: 23"
                class="bg-dark"
              >
                <Label text="Activities" row="0" col="0" class="medium" />

                <Label
                  :text="month + ' ' + date + ', ' + year"
                  row="1"
                  col="0"
                  class="body small"
                  color="#C2C8E6"
                />
              </GridLayout>

              <Label
                text="You have not added any contacts"
                class="body small"
                v-if="contacts.length < 1"
                style="color: black; margin: 23"
              />

              <ScrollView v-if="!processingActivities && contacts.length > 0" height="1200px">
                <StackLayout>
                  <Card
                    v-for="contact in contacts"
                    :key="contact.dt + contact.contactee_usn"
                    :score="contact.contactee_score"
                  >
                    <template v-slot:header>
                      <StackLayout class="card-header">
                        <label>Date: {{ contact.dt }}</label>
                      </StackLayout>
                    </template>
                    <template v-slot:content>
                      <StackLayout class="card-content">
                        <label>You met: {{ contact.contactee_usn }}</label>
                        <label>
                          Danger Level:
                          {{
                          contact.contactee_score > 0
                          ? 100 - contact.contactee_score + "%"
                          : "UNKOWN"
                          }}
                        </label>
                      </StackLayout>
                    </template>
                  </Card>
                </StackLayout>
              </ScrollView>
            </StackLayout>
          </GridLayout>
        </TabContentItem>
        <TabContentItem>
          <GridLayout>
            <StackLayout orientation="vertical">
              <GridLayout
                columns="*, *"
                rows="auto, auto"
                v-if="!processing"
                style="height: 120; padding: 23"
                class="bg-dark"
              >
                <Label text="Exposure" row="0" col="0" class="medium" />

                <Label text="Levels" row="1" col="0" class="body small" color="#C2C8E6" />
              </GridLayout>

              <Label
                text="You have not been exposed on any level"
                class="body small"
                v-if="!anyLevel()"
                style="color: black; margin: 23"
              />

              <ScrollView v-if="!processingExposure && anyLevel()" height="1200px">
                <StackLayout>
                  <Card v-for="item in exposure_level_1" :key="item.dt">
                    <template v-slot:header>
                      <StackLayout class="card-header">
                        <label>Date: {{ item.dt }}</label>
                        <label>Degree: First</label>
                      </StackLayout>
                    </template>

                    <template v-slot:content>
                      <StackLayout class="card-content">
                        <label>Number of Times: {{ item.cnt }}</label>
                      </StackLayout>
                    </template>
                  </Card>

                  <Card v-for="item in exposure_level_2" :key="item.dt">
                    <template v-slot:header>
                      <StackLayout class="card-header">
                        <label>Date: {{ item.dt }}</label>
                        <label>Degree: Second</label>
                      </StackLayout>
                    </template>

                    <template v-slot:content>
                      <StackLayout class="card-content">
                        <label>Number of Times: {{ item.cnt }}</label>
                      </StackLayout>
                    </template>
                  </Card>

                  <Card v-for="item in exposure_level_3" :key="item.dt">
                    <template v-slot:header>
                      <StackLayout class="card-header">
                        <label>Date: {{ item.dt }}</label>
                        <label>Degree: Third</label>
                      </StackLayout>
                    </template>

                    <template v-slot:content>
                      <StackLayout class="card-content">
                        <label>Number of Times: {{ item.cnt }}</label>
                      </StackLayout>
                    </template>
                  </Card>
                </StackLayout>
              </ScrollView>
            </StackLayout>
          </GridLayout>
        </TabContentItem>
        <TabContentItem>
          <GridLayout>
            <WebView
              v-if="currentGeoLocation.latitude && webviewSrc"
              height="99%"
              :src="webviewSrc"
              loaded="onWebViewLoaded"
            />

            <Button
              v-if="!currentGeoLocation.latitude && !webviewSrc"
              text="Enable Location"
              @tap="enableLocationServices"
              class="btn btn-primary m-t-20"
            ></Button>
          </GridLayout>
        </TabContentItem>

        <TabContentItem>
          <GridLayout>
            <StackLayout orientation="vertical">
              <GridLayout
                columns="*, *"
                rows="auto, auto"
                v-if="!processing"
                style="height: 120; padding: 23"
                class="bg-dark"
              >
                <Label text="Account" row="0" col="0" class="medium" />

                <Label text="Options" row="1" col="0" class="body small" color="#C2C8E6" />
              </GridLayout>

              <Button
                text="Logout"
                :isEnabled="!processing"
                @tap="logout"
                class="submit-btn red-button"
              ></Button>
            </StackLayout>
          </GridLayout>
        </TabContentItem>
      </Tabs>
    </StackLayout>
  </Page>
</template>

<script>
import {
  getFile,
  getImage,
  getJSON,
  getString,
  request,
  HttpResponse,
} from "tns-core-modules/http";

import { BASE_API, GKEY } from "../common/constants";
import Vue from "nativescript-vue";
import RadRadialGauge from "nativescript-ui-gauge/vue";
Vue.use(RadRadialGauge);

import Login from "./Login";

import Card from "./Card";

import TimeLine from "./TimeLine";

import ContactAdd from "./ContactAdd";

import QuizView from "./QuizView";

import ContactModal from "./ContactModal";

const appSettings = require("tns-core-modules/application-settings");

const geoLocation = require("nativescript-geolocation");

export default {
  components: {
    Card,
  },
  data() {
    return {
      processing: true,
      processingActivities: true,
      processingExposure: true,
      summary: null,
      exposure_level_1: [],
      exposure_level_2: [],
      exposure_level_3: [],
      intervalid1: null,
      contacts: [],
      token: null,
      userid: null,
      username: "",
      message: `Welcome`,
      isPhone: null,
      webviewSrc: null,
      webviewLoading: false,
      currentGeoLocation: {
        latitude: null,
        longitude: null,
        altitude: null,
        direction: null,
      },
    };
  },
  created() {
    this.token = appSettings.getString("tok", null);

    this.userid = appSettings.getString("userid", null);
    // second parameter is default value
    this.message = "Welcome" + appSettings.getString("username", null);
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
    this.loadContacts();
    this.loadExposure();
    let self = this;
    this.intervalid1 = setInterval(function () {
      self.loadSummary();
      self.loadContacts();
      self.loadExposure();
    }, 18000);
  },
  destroyed() {
    clearInterval(this.intervalid1);
  },
  methods: {
    onLoaded(args) {
      this.enableLocationServices();
    },
    enableLocationServices: function () {
      geoLocation.isEnabled().then((enabled) => {
        if (!enabled) {
          geoLocation.enableLocationRequest().then(() => this.showLocation());
        } else {
          this.showLocation();
        }
      });
    },
    showLocation: function () {
      geoLocation.watchLocation(
        (location) => {
          this.currentGeoLocation = location;
          this.webviewSrc = `https://imagemagikassets.s3.eu-central-1.amazonaws.com/maps_disp.html?key=${GKEY}&tok=${this.token}&lat=${this.currentGeoLocation.latitude}&lng=${this.currentGeoLocation.longitude}`;
        },
        (error) => {
          alert(error);
        },
        {
          desiredAccuracy: 3,
          updateDistance: 10,
          minimumUpdateTime: 1000 * 1,
        }
      );
    },

    anyLevel() {
      return (
        this.exposure_level_1.length > 0 ||
        this.exposure_level_2.length > 0 ||
        this.exposure_level_3.length > 0
      );
    },

    onWebViewLoaded(webargs) {
      this.webviewLoading = false;
    },
    loadSummary() {
      var addr = `${BASE_API}Users/user_summary/${this.userid}`;
      console.log(addr);
      request({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      }).then(
        (response) => {
          const result = response.content.toJSON();

          console.log(result);

          if (response.statusCode == 200) {
            this.summary = result;

            this.percentage = 6 - (this.summary.latest_score_numeric / 100) * 6;

            this.percentageDescription = this.summary.latest_score_title;
          }

          this.processing = false;
        },
        (e) => {
          this.alert("Unfortunately we could not fetch your data.");
        }
      );
    },
    loadContacts() {
      var addr = `${BASE_API}Users/user_contacts/${this.userid}`;
      console.log(addr);
      request({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      }).then(
        (response) => {
          const result = response.content.toJSON();

          if (response.statusCode == 200) {
            this.contacts = result.meetings;
          }

          this.processingActivities = false;
        },
        (e) => {
          // this.processing = false;
        }
      );
    },
    loadExposure() {
      var addr = `${BASE_API}Users/user_exposure/${this.userid}`;
      console.log(addr);
      request({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      }).then(
        (response) => {
          const result = response.content.toJSON();

          console.log(result);

          if (response.statusCode == 200) {
            this.exposure_level_1 = result.level_1;
            this.exposure_level_2 = result.level_2;
            this.exposure_level_3 = result.level_3;
          }

          this.processingExposure = false;
        },
        (e) => {
          // this.processing = false;
        }
      );
    },
    showModal() {
      this.$showModal(ContactModal);
    },
    openContactForm() {
      this.$navigateTo(ContactAdd, {
        transition: {
          name: "fade",
          duration: 1200,
          props: {
            nothing: new Date(),
          },
        },
      });
    },
    openForm() {
      this.$navigateTo(QuizView, {
        transition: {
          name: "fade",
          duration: 1200,
        },
        props: {
          quizid: this.summary.active_quiz_id,
        },
      });
    },
    logout() {
      appSettings.remove("tok");

      appSettings.remove("username");

      this.$navigateTo(Login, {
        clearHistory: true,
      });
    },
    goToTimeline() {
      this.$navigateTo(TimeLine, {
        clearHistory: true,
      });
    },
  },
};
</script>

<style>
.home-height-main {
  height: 63%;
}
.home-header {
  border-bottom-right-radius: 30;
  border-bottom-left-radius: 30;
  color: #fff;
  padding: 24;
  height: 260;
}
.home-label {
  color: white;
  width: 70%;
  font-size: 36;
  font-weight: 500;
}
.text-wrapper {
  width: 30%;
}
.text-right {
  color: #fff;
  width: 100%;
  font-size: 72;
  font-weight: bold;
  /* border-width: 2px;
  border-color: #fff; */
}
.btn-action {
  width: 45%;
  height: 48;
  margin-left: 1%;
  margin-right: 1%;
  font-size: 18;
  border-radius: 5;
}
.radial-wrapper {
  background-color: #fff;
  width: 90%;
  border-radius: 15;
  padding: 16 0 0 0;
}
.update-section {
  height: 20%;
  padding: 12 24;
}
.radial-label {
  font-size: 32;
  font-weight: bold;
  width: 100%;
  color: #000;
  text-align: left;
}
.last-update {
  color: #000;
  font-size: 16;
  text-align: left;
}

.cta-section {
  height: 20%;
  margin: 24 0;
  padding: 12 24;
}
.take-quiz {
  width: 80%;
  border-radius: 30;
  font-size: 24;
  font-weight: bold;
}
.risk-details {
  width: 100%;
  justify-content: space-around;
  padding: 0 24 24 24;
}
.risk-detail-wrapper {
  width: 45%;
  align-items: flex-start;
}
.symptom {
  color: #000;
  font-size: 18;
  font-weight: 500;
}
.symptoms {
  font-weight: bold;
  font-size: 20;
  color: gray;
}

.symptom-val {
  font-size: 13;
  font-weight: 700;
}
</style>
