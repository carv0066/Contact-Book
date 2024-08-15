<template>
    <div class="container">
        <h1 class="main-title">Add Contact</h1>
        <form @submit.prevent="addContact">
            <div class="form">
                <label for="firstName" class="form-label">First Name:</label>
                <input type="text" id="firstName" v-model="newContact.firstName" required class="form-input" />
            </div>
            <div class="form">
                <label for="lastName" class="form-label">Last Name:</label>
                <input type="text" id="lastName" v-model="newContact.lastName" required class="form-input" />
            </div>
            <div class="form">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" v-model="newContact.email" required class="form-input" />
            </div>
            <button type="submit" class="global-button">Add Contact</button>
            <button type="button" @click="cancel" class="cancel-button">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddContact',
    data() {
        return {
            newContact: {
                firstName:'',
                lastName: '',
                email:'',
            }
        }
    },
    methods: {
    addContact() {
        
        const storedContacts = localStorage.getItem('contacts');
        let contacts = [];
        
        if (storedContacts) {
            try {
                contacts = JSON.parse(storedContacts);
            } catch (error) {
                console.error('Error', error);
            }
        }

        let newId = 1;
        for (const contact of contacts) {
            if (contact.id >= newId) {
                newId = contact.id + 1;
            }
        }

        const contact = { id: newId, ...this.newContact };
        
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        
        this.$router.push('/');
    },
    cancel() {
            this.$router.push('/');
        }
}
};
</script>

<style scoped>

    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #F8F7FF;  
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .contact-form {
    display: flex;
    flex-direction: column;
    }

    .form {
        margin-bottom: 15px;
    }

    .form-label {
        display: block;
        font-size: 16px;
        color: #110f1d;
        margin-bottom: 5px;
    }

    .form-input {
        width: 100%;
        max-width: 758.4px;
        padding: 10px 20px;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        color: #110f1d;
        background-color: #ffffff;
        border: 1px solid #9381FF;
        border-radius: 25px;
        outline: none;
        transition: all 0.3s ease-in-out;
        margin-bottom: 20px;
    }

    .form-input:focus {
        border-color: #B8B8FF;
    }

    .global-button:hover {
        background-color: #B8B8FF;
    }

    .cancel-button {
    display: inline-block;
    padding: 10px 20px;
    margin-left: 10px;
    font-size: 16px;
    color: #9381FF;
    background-color: #ffffff; 
    border: 1px solid #9381FF;
    border-radius: 5px;
    text-align: center;
    text-decoration: none; 
    cursor: pointer;
    transition: background-color 0.3s;
    }

</style>