<template>
    <Page @loaded="onLoaded">

        <ActionBar title="Add Contact"></ActionBar>
	    
        <ScrollView style="margin-top: 6%">
             <StackLayout>
        <StackLayout class="modal-form">
		    <Label text="Who did you meet?" style="color: black; margin-bottom: 3px;"/>
            <StackLayout  orientation="horizontal">
                <ListPicker :items="prefixes"
                                v-model="selectedIndex" style="margin:5; width: 23%; height: 60"/>
                <TextField class="input" hint="7xxxxxxxx"
                    keyboardType="phone" autocorrect="false"
                    autocapitalizationType="none" v-model="phone" style="width: 77%"></TextField>
                        
            </StackLayout>

 
            <StackLayout class="modal-form-field">
                <Label text="When did you meet them?" style="color: black; margin-bottom: 13px;"/>
                
                <DatePicker :year="currentYear" @dateChange="dateChanged($event)"
                    :month="currentMonth" :day="currentDay"
                    minDate="1970-01-01"  style="height: 100;margin-bottom: 23px;" class="date-picker"/>

                <StackLayout class="hr-dark"></StackLayout>
            </StackLayout>

            <StackLayout >
                <Label text="Where did you meet them?" style="color: black; margin-bottom: 13px;"/>
                        <SearchBar hint="Type in a location" :text="searchPhrase"
                            @submit="searchSubmit" @clear="onTextClear" style=""/>
                        <StackLayout class="hr-dark"></StackLayout>


                    <StackLayout  style="height: 15%; margin-top: -37px; background-color: #2C3251" v-if="!location && !textCleared">
                        <Label v-for="location in locations" :text="location.description" :key="location.place_id" @tap="locationSelected(location.place_id, location.description)" style="color: white; margin: 7;"/>
                    </StackLayout>

            </StackLayout>

            <StackLayout class="modal-form-field">
                <Label v-if="location" :text="'' + location" style="color: black; margin-bottom: 3%; margin-top: 33px;" textWrap="true"/>
                
                <StackLayout v-if="location" class="hr-dark"></StackLayout>
            
            </StackLayout>
            
        </StackLayout>

        <ActivityIndicator rowSpan="7" :busy="processing"></ActivityIndicator>

        <Button v-if="phone && nick && location && chosenDate && !processing" class="btn btn-primary" text="Save Contact" @tap="submitContact"/>
        <Label v-if="!chosenDate" text="* Please pick a date" style="color: red; margin: 5"></Label>

        <Label v-if="!phone" text="* Please pick a phone number" style="color: red; margin: 5"></Label>

        <Label v-if="error" text="Sorry, request failed, try again" style="color: red; margin: 5"></Label>
 </StackLayout>
	</ScrollView>

    </Page>
</template>

<script>

import { getFile, getImage, getJSON, getString, request, HttpResponse} from "tns-core-modules/http";

import {BASE_API, GKEY} from '../common/constants';

const appSettings = require("tns-core-modules/application-settings");

import Home from "./Home";

export default {
    data() {
        return {
            phone: null,
            processing: false,
            nick: 'nick',
            searchPhrase: '',
            suspicion: false,
            chosenDate: null,
            currentDay: new Date().getUTCDate(),
            currentMonth: new Date().getUTCMonth() + 1,
            currentYear: new Date().getUTCFullYear(),
            prefix: '+254',
            prefixes: [
                    "+254"
                ],
            selectedIndex: 0,
            error: false,
            locations: [],
            location: null,
            locationId: null,
            textCleared: true,
            maxdate: '',
            fakeLocs: [
                {
                    "description": "Ongata Rongai, Kenya",
                    "place_id": "ChIJjU75UM8FLxgRqYz95laWwlE",
                },
                {
                    "description": "Loresho, Nairobi, Kenya",
                    "place_id": "ChIJzajLka0ZLxgRjWv3e-VVAqY",
                },
                {
                    "description": "Mama Ngina Waterfront, Mama Ngina Drive, Mombasa, Kenya",
                    "place_id": "ChIJmYbxMPUTQBgRqaZKpuRRk5Q",
                },
                {
                    "description": "Mama Ngina Street, Nairobi, Kenya",
                    "place_id": "EiFNYW1hIE5naW5hIFN0cmVldCwgTmFpcm9iaSwgS2VueWEiLiosChQKEgnZIBez1xAvGBEkIUs5hWHrEhIUChIJTQu5FNcQLxgRTCl8KZuPjfU",
                }
            ],
            token: null
        };
    },
    methods: {
        onLoaded(args) {
        console.log('modal created');

        this.token = appSettings.getString("tok", null);

        var currentDate = new Date();
        var day = currentDate.getDay();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();
        
        this.maxdate = `${year}-${month}-${day}`
        },
        dateChanged (arg) {
            console.log(arg.value);

            // var newDate = new Date(arg.value);

            this.chosenDate = arg.value;
        },
        onTextClear () {
            this.textCleared = true
        },
        locationSelected (placeid, desc) {
            console.log('location selected:' + desc);
            this.location = desc;
            this.locationId = placeid;
        },
        submitContact () {

            this.processing = true;

            request({
                    url: BASE_API + "Users/contact_add",
                    method: "POST",
                    headers: { "Content-Type": "application/json" , 'Authorization': 'Bearer ' + this.token},
                    content: JSON.stringify({
                        location: this.location,
                        location_id: this.locationId,
                        meeting_date: `${this.chosenDate.getFullYear()}-${this.chosenDate.getMonth() + 1}-${this.chosenDate.getDate()}`,
                        phone: this.prefix + this.phone,
                        nick: this.nick
                    })
                    }).then((response) => {
                        const result = response.content.toJSON();
                        this.processing = false;
                        
                        console.log(response);

                        if(response.statusCode == 200) {
                            this.$navigateTo(Home, {
                            transition: {
                                name:'fade',
                                duration: 1200,
                                props: {
                                    nothing: new Date(), 
                                }
                            },
                            });
                            this.error = false;
                        }
                        else{
                            this.error = true;
                        }

                    }, (e) => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we could not save this data, try again."
                        );
                    })
        },
        searchSubmit (args) {
            this.processing = true;

            this.textCleared = false;

            this.location = null;

            let searchBar = args.object;

            const processedPhrase = searchBar.text.replace(' ', '+')
            //this.locations = this.fakeLocs // result.predictions;
            this.processing = false;
            request({
                    url:  `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${processedPhrase}&key=${GKEY}`,
                    method: "GET",
                    }).then((response) => {
                        const result = response.content.toJSON();
                        this.locations = result.predictions;
                        this.processing = false;
                    }, (e) => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we could not set up your search."
                        );
                    })
        }
    },
};
</script>

<style>
.date-picker {
    background-color: white;
    border-color: black;
    border-width: 2;
    border-radius: 10;
    color: black;
    vertical-align: middle;
}
</style>
