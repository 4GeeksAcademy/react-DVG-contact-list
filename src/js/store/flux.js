const getState = ({ getStore, getActions, setStore }) => {  
	return {
		store: {
			contact: [],
			
		},
		actions: {

			loadContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/osagras")
					.then((response) => response.json())
					.then((data) => {
						setStore({ contact: data });
					})
			},

			addContact(createContact) {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"full_name": createContact.full_name,
						"email": createContact.email,
						"agenda_slug": "osagras",
						"address":createContact.address,
						"phone":createContact.phone,
					})
				};
				fetch('https://playground.4geeks.com/apis/fake/contact/', requestOptions)


			},

			editContact: (changeContact, id) => {
				const editOptions = {
			   method: "PUT",
			   headers: { 'Content-Type': 'application/json' },
			   body: JSON.stringify({
				   "full_name": changeContact.full_name,
				   "email": changeContact.email,
				   "agenda_slug": "osagras",
				   "address":changeContact.address,
				   "phone":changeContact.phone,
			   })

		   };
		   fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, editOptions)
		   .then(response => response.json())
		   .then(console.log(`https://playground.4geeks.com/apis/fake/contact/${id}`));
   		},	

			deleteContact: (id) => {
				const deleteOptions = {
					method: "DELETE",
					headers: { 'Content-Type': 'application/json'  },	
				};
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, deleteOptions)
					.then(response => response.json())
					.then((data =>{ 
						fetch("https://playground.4geeks.com/apis/fake/contact/agenda/osagras")
							.then((response) => response.json())
							.then((data) => {
								setStore({ contact: data });
							})				
					}))
			},
			
		}
	};
};

export default getState;