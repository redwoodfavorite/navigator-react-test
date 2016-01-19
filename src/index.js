import ApplicationRouter from './routers/ApplicationRouter';

$(() => {
	new ApplicationRouter({ $el: $("body") });
});
