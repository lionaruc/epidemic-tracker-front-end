<template>
    <Page>
        <ActionBar :title="quiz_name"></ActionBar>

        <ScrollView  style="margin-top: 11%">
            <StackLayout  v-if="!processing && !completed">
                <StackLayout
                         v-for="question in items" :key="question.position"  style="margin: 13; margin-left: 33; margin-right: 33; height: 33%; margin-top: 15%;">
                        
                        <Label   :text="(question.postion) + '. ' + question.question_text" 
                              textWrap="true" style="margin: 3; color: black;"  />

                        <ListPicker :items="question.display_answers"
                                v-model="question.selectedIndex" style="margin: 5"/>
                
                </StackLayout>

                <Button text="Submit"
                     class="btn btn-primary m-t-20" @tap="submit"></Button>
            </StackLayout>
            <StackLayout orientation="vertical" style="height: 300; text-align: center" v-if="completed">
                <RadRadialGauge  style="height: 220">
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

                <label :text="percentageDescription" style="color: black" textWrap="true"/>

            </StackLayout>

            <ActivityIndicator rowSpan="3" :busy="processing" color="red"></ActivityIndicator>

            

        </ScrollView>

    </Page>
</template>

<script>
    import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    Vue.use(RadDataForm);

    import {BASE_API} from '../common/constants';

    const appSettings = require("tns-core-modules/application-settings");

    import Login from "./Login";

    export default {
        
        created () {
            // alert(this.id)
            // this.currentQuestion = items[currentQuestionIndex];
            this.token = appSettings.getString("tok", null);
            this.loadQuiz(this.quizid);
        },
        props: ['quizid'],
        data() {
            return {
                currentQuestion: null,
                currentQuestionIndex: 0,
                completed: false,
                items: [],
                listPickerCountries: [
                    "Australia",
                    "Belgium",
                    "Bulgaria",
                    "Canada",
                    "Switzerland",],
                    selectedListPickerIndex: 0,
                percentage: 0,
                percentageDescription: '',
                processing: true,
                quiz_id: null,
                quiz_name: 'loading',
                token: null
            };
        },
        methods: {

            submit () {

                const raw_data = JSON.stringify(this.items);

                console.log(raw_data);

                this.processing = true;

                request({
                    url: BASE_API + "Quizes/submit_answers",
                    method: "POST",
                    headers: { "Content-Type": "application/json" , 'Authorization': 'Bearer ' + this.token},
                    content: JSON.stringify({
                        quiz_id: this.quizid,
                        raw_quiz_data: raw_data,
                        
                    })
                    }).then((response) => {
                        const result = response.content.toJSON();
                        this.processing = false;
                        
                        console.log(result);

                        if(response.statusCode == 200) {
                            
                            this.completed = true;

                            this.percentage = (6 - (result.percentage / 100) * 6)

                            this.percentageDescription = result.quizLevel;
                        }
                        else{
                            this.alert(
                            "Unfortunately we could not save this data, try again."
                            );
                        }

                    }, (e) => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we could not save this data, try again."
                        );
                    })
            },
            alert(message) {
                return alert({
                    title: "Trace",
                    okButtonText: "OK",
                    message: message
                });
            },
            loadQuiz(quizid) {
                var addr = `${BASE_API}Quizes/view/${quizid}`
                console.log(addr)
                request({
                    url:  `${BASE_API}Quizes/view/${quizid}`,
                    method: "GET",
                    headers: { "Content-Type": "application/json" , 'Authorization': 'Bearer ' + this.token},
                    }).then((response) => {
                        const result = response.content.toJSON();

                        console.log(result);
                         
                        if(response.statusCode == 200) {

                            const processed = []

                            const qns = result.quiz.questions;

                            this.quiz_id = result.quiz_id;

                            this.quiz_name = result.quiz_name;

                            for (var i=0; i< qns.length; i++) {

                                var currentQuestion = qns[i];

                                const ans_array = []

                                var current_answers = currentQuestion.answers;

                                for (var j=0; j<current_answers.length; j++ ) {
                                    
                                    var current_ans = current_answers[j];
                                    ans_array.push(current_ans.answer_text);
                                }
                                
                                currentQuestion.display_answers = ans_array;

                                currentQuestion.selectedIndex = 0;

                                processed.push(currentQuestion);
                            }

                            this.items = processed;
                        }

                        this.processing = false;

                    }, (e) => {
                        // this.processing = false;
                        this.alert(
                            "Unfortunately we could not fetch the quiz."
                        );
                    })
            },
           
        }
    };
</script>

<style>

.nav-btn {
    margin-left: 50;
    margin-right: 50;
}


</style>
