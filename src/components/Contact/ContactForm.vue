<template>
    <main>
        <form class="contact__form">
            <div class="form__control">
                <label for="">Your Name</label>
                <input type="text">
            </div>
            <div class="form__control">
                <label for="">Your eMail</label>
                <input type="email">
            </div>
            <div class="form__control">
                <label for="">What do you want to tell me?</label>
                <textarea name="" id="" rows="5"></textarea>
            </div>
            <div class="form__control">
                <label for="">What do you want to tell me?</label>
                <input type="radio">
                <input type="radio">
            </div>
        </form>    
    </main>    
</template>

<style scoped>
main {
    width: 80rem;
    margin: 0 auto;
}

.contact__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    width: 30rem;
    background-color: rgb(45,45,45);
    margin: 0 auto;
}

.form__control {
    width: 30rem;
    text-align: center;
}

.form__control > input, textarea {
    width: 100%;
}

</style>