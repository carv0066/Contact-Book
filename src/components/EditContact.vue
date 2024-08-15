<template>
    <div class="container">
        <h1 class="main-title">Edit Contact</h1>
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
            <button type="submit" class="global-button">Save</button>
            <button type="button" @click="cancel" class="cancel-button">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "EditContact",
    data() {
        return {
            newContact: {
                firstName: '',
                lastName: '',
                email: ''
            }
        };
    },
    created() {
        this.fetchContact();
    },

    methods: {
        fetchContact() {
            const id = parseInt(this.$route.params.id);
            const storedContacts = localStorage.getItem('contacts');
            
            if (storedContacts) {
                try {
                    const contacts = JSON.parse(storedContacts);
                    let selectedContact = null;
                    
                    contacts.forEach(contact => {
                        if (contact.id === id) {
                            selectedContact = contact;
                        }
                    });
                    
                    if (selectedContact) {
                        this.newContact = { ...selectedContact };
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        },

        updateContact() {
            const id = parseInt(this.$route.params.id);
            const storedContacts = localStorage.getItem('contacts');
            
            if (storedContacts) {
                try {
                    let contacts = JSON.parse(storedContacts);
                    
                    contacts = contacts.map(contact => {
                        if (contact.id === id) {

                            if (this.newContact.firstName !== undefined && this.newContact.firstName !== null) {
                                contact.firstName = this.newContact.firstName;
                            }
                            if (this.newContact.lastName !== undefined && this.newContact.lastName !== null) {
                                contact.lastName = this.newContact.lastName;
                            }
                            if (this.newContact.email !== undefined && this.newContact.email !== null) {
                                contact.email = this.newContact.email;
                            }
                        }
                        return contact;
                    });
                    
                    localStorage.setItem('contacts', JSON.stringify(contacts));
                    this.$router.push('/');
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        },

        cancel() {
            this.$router.go(-1);
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
    display: flex;
    flex-direction: column;
}

.main-title {
    font-size: 24px;
    color: #110f1d;
    margin-bottom: 20px;
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
    padding: 10px;
    font-size: 16px;
    border: 1px solid #9381FF;
    border-radius: 5px;
    outline: none;
}

.global-button {
    background-color: #00A980;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 10px;
}

.global-button:hover {
    background-color: #008f6f;
}

.cancel-button {
    background-color: #ff8181;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cancel-button:hover {
    background-color: #fbbcbc;
}
</style>
