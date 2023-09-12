export interface Env {
}

async function fetch(_: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	return new Response("Hi");
}

export default { fetch };
