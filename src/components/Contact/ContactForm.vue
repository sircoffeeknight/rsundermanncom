<template>
    <form v-if="sendSuccess == false" class="contact__form" @submit.prevent="sendEmail">
        <input type="hidden" name="contact_type" :value="currentRouteName">
        <div class="form__control">
            <label for="from_name" v-if="currentRouteName == 'Other' || currentRouteName == 'Recruiter'">Your Name</label>
            <label for="from_name" v-else>Company</label>
            <input type="text" name="from_name" v-model="name">
        </div>
        <div class="form__control" v-if="currentRouteName == 'Company'">
            <label for="personal_name">Your Name / Position</label>
            <input type="text" name="personal_name" v-model="personal_name">
        </div>
        <div class="form__control">
            <label for="reply_to">Your Email</label>
            <input type="email" name="reply_to" v-model="email">
        </div>
        <div class="form__control">
            <label for="message">What do you want to tell me?</label>
            <textarea name="message" id="" rows="5" v-model="message"></textarea>
        </div>
        <div class="form__control">
            <label for="security">Please answer the question</label>
            <input type="number" placeholder="What is 2 + 7?" name="security" v-model="securityCheck">
        </div>
        <input type="submit" value="Submit">
    </form> 
    <div v-else>
        <h2>Email send! <span style="color: limegreen;"><font-awesome-icon icon="check-circle" size="1x" /></span></h2>
    </div>    
</template>

<script>
import emailjs from 'emailjs-com';
import emailjs_load from './emailjs_data.vue';

export default {
    data() {
        return {
            securityCheck: null,
            name: null,
            email: null,
            message: null,
            personal_name: null,
            sendSuccess: false,
        }
    },
    methods: {
        sendEmail(e) {
                if(this.securityCheck == 9) {
                    emailjs.sendForm(emailjs_load.data().service_id, emailjs_load.data().template_id, e.target, emailjs_load.data().user_id)
                .then(() => {
                    this.sendSuccess = true;
                }, (error) => {
                    console.log('FAILED TO SEND MAIL...', error);
                    this.sendSuccess = false;
                });
                this.name = null;
                this.email = null;
                this.message = null;
                this.personal_name = null;
                this.securityCheck = null;
            }
        },
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
    }
}
</script>

<style scoped>

.contact__form {
    width: 30rem;
    padding: 1rem;
    margin: 0 auto;
}

.form__control {
    text-align: center;
    margin: 1rem auto 1rem auto;
}

label {
    color: white;
    font-size: 2em;
}

.form__control > input, textarea {
    width: 100%;
}

input {
    height: 2rem;
}

input[type=submit] {
    width: 100%;
    height: 3rem;
    font-size: 2em;
    color: white;
    background-color: orangered;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

button:hover {
    background-color: white;
    color: orangered;
    transition: 0.2s ease-in-out;
}

h2 {
    color: white;
    text-align: center;
}

</style>