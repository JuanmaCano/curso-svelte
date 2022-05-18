import Inicio from './routes/Inicio.svelte';
import Acerca from './routes/Acerca.svelte';
import Contacto from './routes/Contacto.svelte';
import Error from './routes/Error.svelte';

const routes = {
	'/': Inicio,
	// :nombre? es un param opcional
	'/acerca/:id/:nombre?': Acerca,
	'/contacto': Contacto,
	'*': Error,
};

export default routes;
