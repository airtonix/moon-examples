import z from "zod";

export function add(a: number, b: number): number {
	return a + b;
}

const NameSchema = z.string();
type Name = z.infer<typeof NameSchema>;
export function echo(name: Name) {
	return `Hello ${name} from node-package!`;
}