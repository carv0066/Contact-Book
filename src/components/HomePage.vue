<template>
    <div class="container">
        <div class="header-btn">
            <h1 class="main-title">Contacts</h1>
            <!-- Add Contact -->
            <router-link to="/add" class="global-button">Add Contact</router-link>
        </div>
        <!--  Search bar -->
        <input type="text" v-model="searchQuery" placeholder="Search" class="search-bar" />
        
        <!-- Contact List -->
        <ul class="contact-list">
            <li v-for="contact in filteredContacts" :key="contact.id" class="contact-item">
                <router-link :to="`/details/${contact.id}`" class="contact-link">{{ contact.firstName }} {{ contact.lastName }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
    return {
        searchQuery: '',
        contacts: [],
    };
    },

    created() {
        this.fetchContacts();
    },

    methods: {
        fetchContacts() {
            const storedContacts = localStorage.getItem('contacts');
            if (storedContacts) {
                try {
                    this.contacts = JSON.parse(storedContacts);
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                this.contacts = [];
            }
        }
    },

    computed: {
    filteredContacts() {
        const results = [];
        this.contacts.forEach(contact => {
            const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
            if (fullName.includes(this.searchQuery.toLowerCase())) {
                results.push(contact);
            }
        });
        results.sort((a, b) => a.lastName.localeCompare(b.lastName));
        return results;

    },
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

    .header-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .global-button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #9381FF; 
        border: none;
        border-radius: 5px;
        text-align: center;
        text-decoration: none; 
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .add-contact:hover {
        background-color: #B8B8FF; 
    }

    .search-bar {
        width: 100%;
        max-width: 758.4px;
        padding: 10px 20px;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        color: #110f1d;
        background-color: #efedfb;
        border: 1px solid #9381FF;
        border-radius: 25px;
        outline: none;
        transition: all 0.3s ease-in-out;
        margin-bottom: 20px;
    }

    .contact-list {
        list-style: none;
        padding: 20px 20px;
        margin: 0;
        border: 1px solid #9381FF;
        border-radius: 8px;
    }   

    .contact-item {
        padding: 15px;
        margin: 10px 0;
        border: 1px solid #ffffff;
        background-color: #ffffff;
        border-radius: 8px; 
        transition: background-color 0.2s;
    }

    .contact-item:hover {
    background-color: #9381FF;
    color: white;
}

    .contact-link {
        text-decoration: none;
        color: #110f1d;
        font-size: 18px;
        transition: color 0.2s;
    }

    .contact-link:hover {
        color: #ffffff;
            background-color: #9381FF;
    }


</style>