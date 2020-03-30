<template>
    <Page>
        <ActionBar :title="'Form ' + quizid"></ActionBar>

        <ScrollView >
            <StackLayout  v-if="!processing">
                <StackLayout
                         v-for="question in items" :key="question.position"  style="margin: 13;">
                        
                        <Label   :text="(question.postion) + '. ' + question.question_text" 
                              textWrap="true" style="margin: 3; color: black;"  colo/>

                    

                        <ListPicker :items="question.display_answers"
                                v-model="question.selectedIndex" style="margin: 5"/>
                
                        
                </StackLayout>

                <Button text="Submit"
                     class="btn btn-primary m-t-20"></Button>
            </StackLayout>

            <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>

            

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
                items: [],
                listPickerCountries: [
                    "Australia",
                    "Belgium",
                    "Bulgaria",
                    "Canada",
                    "Switzerland",],
                    selectedListPickerIndex: 0,
                processing: true,
                token: null
            };
        },
        methods: {

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

                            for (var i=0; i< qns.length; i++) {

                                var currentQuestion = qns[i];

                                const ans_array = []

                                // console.log(currentQuestion.answers)

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
