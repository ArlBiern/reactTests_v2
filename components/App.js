var contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Kowalski',
		email: 'jan.kowalski@example.com'
	},
	{
		id: 2,
		firstName: 'Paweł',
		lastName: 'Musi',
		email: 'pawel.musi@example.com'
	},
	{
		id: 3,
		firstName: 'Adam',
		lastName: 'Nowak',
		email: 'adam.nowak@example.com'
	},
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {items: contacts}, {})
			)
		);
	}
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));