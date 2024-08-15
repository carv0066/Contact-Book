<template>
    <div class="details-container">
        <button @click="goBack" class="back-button">
            <i class="fas fa-arrow-left"></i> Back
        </button>
        <h1 class="contact-name">{{ contact.firstName }} {{ contact.lastName }}</h1>
        <p class="contact-email">Email: {{ contact.email }}</p>
        <div class="buttons">
            <button @click="editContact" class="edit-button">Edit</button>
            <button @click="deleteContact" class="delete-button"> Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Details',
    data() {
        return {
            contact: null
        };
    },
    created() {
        this.fetchContact();
    },
methods: {
    fetchContact() {
    const id = parseInt(this.$route.params.id);
    const storedContacts = localStorage.getItem('contacts');

    let contacts = [];

    if (storedContacts) {
        try {
            contacts = JSON.parse(storedContacts);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    this.contact = this.findContactById(contacts, id);
},

findContactById(contacts, id) {
        let foundContact = null;
        
        contacts.forEach(contact => {
            if (contact.id === id) {
                foundContact = contact;
            }
        });

        return foundContact;
    },

    deleteContact() {
        const id = parseInt(this.$route.params.id);
        const storedContacts = localStorage.getItem('contacts');

        if (storedContacts) {
            try {
                let contacts = JSON.parse(storedContacts);

                
                contacts = contacts.filter(contact => contact.id !== id);


                localStorage.setItem('contacts', JSON.stringify(contacts));

                this.$router.push('/');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    },

        goBack() {
            this.$router.go(-1);
        },

        editContact() {
            this.$router.push(`/edit/${this.contact.id}`); 
        }
    }

};
</script>

<style scoped>
.details-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #F8F7FF;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: start;
}

.buttons {
    display: flex;
    justify-content: space-around;
    gap: 20px; 
    align-items: center;
}


.back-button{
    align-self: flex-start;
    background-color: #9381FF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 20px;
}

.back-button:hover {
    background-color: #B8B8FF;
}

.delete-button {
    align-self: flex-start;
    background-color: #ff8181;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.delete-button:hover {
    background-color: #fbbcbc;
}

.contact-name {
    font-size: 24px;
    color: #110f1d;
    margin: 10px 0;
    padding-top: 20px;
}

.contact-email {
    font-size: 18px;
    color: #110f1d;
    margin: 10px 0;
    padding-bottom: 20px;
}

.edit-button {
    background-color: #00A980;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.edit-button:hover {
    background-color: #008f6f;
}

.fas {
    margin-right: 8px;
}
</style>