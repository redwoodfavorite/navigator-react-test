export default Backbone.Model.extend({
	initialize() {

		this.set({
			page1: {
				title: 'Page 1',
				content: 'This is page number one!'
			},
			page2: {
				title: 'Page 2',
				content: 'This is page number two!'
			},
			page3: {
				title: 'Page 3',
				content: 'This is page number three!'
			}
		});
		
	}
});