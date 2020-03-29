<template>
	<StackLayout class="p-20" backgroundColor="white">

        <Label class="h2 text-center" text="Add a contact" style="color: black"/>

        <StackLayout class="modal-form">
		    
            <StackLayout class="modal-form-field">
                        <TextField class="input" hint="Phone eg. 254xx"
                            keyboardType="phone" autocorrect="false"
                            autocapitalizationType="none" v-model="phone"
                            returnKeyType="next"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
            </StackLayout>

            <StackLayout class="modal-form-field">
                        <TextField class="input" hint="Nickname eg. Joe"
                            keyboardType="text" autocorrect="false"
                            autocapitalizationType="none" v-model="nick"
                            returnKeyType="next"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
            </StackLayout>
 
            <StackLayout >
                <Label text="When did you meet them?" style="color: black; margin-bottom: 13px;"/>
                
                <DatePicker :year="currentYear" @dateChange="dateChanged($event)"
                    :month="currentMonth" :day="currentDay"
                    minDate="1970-01-01"  style="height: 100;margin-bottom: 23px;" class="date-picker"/>

            </StackLayout>

            <StackLayout >
                <Label text="Where did you meet them?" style="color: black; margin-bottom: 13px;"/>
                        <SearchBar hint="Search hint" :text="searchPhrase"
                            @submit="searchSubmit" @clear="onTextClear" />
                        <StackLayout class="hr-light"></StackLayout>


                    <StackLayout  style="height: 100; margin-top: 11px;" v-if="!location && !textCleared">
                        <Label v-for="location in locations" :text="location.description" @tap="locationSelected(location.place_id, location.description)" style="color: black; margin: 7;"/>
                    </StackLayout>

                    
            </StackLayout>

            <StackLayout class="modal-form-field">
                <Label v-if="location" :text="'Location: ' + location" style="color: black; margin-bottom: 13px; margin-top: 33px;"/>
            </StackLayout>
            
        </StackLayout>

        <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>

        <Button :isEnabled="phone && nick && location&& !processing" class="btn btn-outline" text="Save Contact"/>

		<Button class="btn btn-outline" text="Close Modal" @tap="$modal.close()" />
	</StackLayout>
</template>

<script>

 import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";

 import {GKEY} from '../common/constants';

export default {
    data() {
        return {
            phone: null,
            processing: false,
            nick: null,
            searchPhrase: '',
            suspicion: false,
            chosenDate: null,
            currentDay: new Date().getUTCDate(),
            currentMonth: new Date().getUTCMonth() + 1,
            currentYear: new Date().getUTCFullYear(),
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
            ]
        };
    },
    methods: {
        dateChanged (arg) {
            console.log(arg.value);

            var newDate = new Date(arg.value);

            this.chosenDate = newDate;
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
                    url: BASE_API + "Users/contacts/add",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({
                        location: this.location,
                        location_id: this.locationId,
                        meeting_date: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`,
                        phone: this.phone,
                        nick: this.nick
                    })
                    }).then((response) => {
                        const result = response.content.toJSON();
                        this.processing = false;

                        this.alert(
                            "Submission successfull"
                        );

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

            this.locations = this.fakeLocs // result.predictions;
            this.processing = false;
            /*request({
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
                    })*/
        }
    },
    created() {
        console.log('modal created');

        var currentDate = new Date();
        var day = currentDate.getDay();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();
        
        this.maxdate = `${year}-${month}-${day}`
    }
};
</script>

<style>
.date-picker {
    background-color: olivedrab;
    border-color: burlywood;
    border-width: 2;
    border-radius: 10;
    color: whitesmoke;
    vertical-align: middle;
}
</style>
